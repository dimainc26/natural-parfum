import Spacer from "../components/Essentials/Spacer";
import ElegantImage from "../components/ElegantImage";
import ContactUs from "../components/ContactElement/ContactUs";
import ContactNav from "../components/ContactElement/ContactNav";
import WriteUs from "../components/ContactElement/WriteUs";
import { useState } from "react";

const Contacts = () => {
  const [activeTab, setActiveTab] = useState<"contact" | "write">("contact");
  const [animationClass, setAnimationClass] = useState("");

  const handleTabChange = (tab: "contact" | "write") => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setActiveTab(tab);
      setAnimationClass("fade-in");
    }, 300);
  };

  return (
    <>
      <Spacer variant="top">
        <div className="container py-5  d-flex contacts flex-sm-column flex-md-row ">
          <ElegantImage />
          <div className="d-flex contact-right flex-column">
            <div className="d-flex">
              <ContactNav onTabChange={handleTabChange} activeTab={activeTab} />
              <div className={`d-flex element flex-column ${animationClass}`}>
                {activeTab === "contact" && <ContactUs />}
                {activeTab === "write" && <WriteUs />}
              </div>
            </div>
            {/* <div className="maps">maps</div> */}
          </div>
        </div>
      </Spacer>
    </>
  );
};

export default Contacts;
