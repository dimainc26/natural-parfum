type Props = {
  text: string;
  img?: string;
  name: string;
};

const TestimonialCard = ({ name, text }: Props) => {
  return (
    <div className="col-md-3 col-12">
      <div className="card p-3 text-center border-0 shadow">
        <div className="card-interior d-flex flex-column">
          <p>{text}</p>
          <div className="d-flex gap-2 justify-content-start">
            <div className="avatar d-flex justify-content-center align-items-center rounded-circle">
              <img src="./pngs/girl-chance-chanel.png" alt="Wade Warren" />
            </div>
            <div>
              <p className="name">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
