import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardFooter,
} from "reactstrap";

function randColor() {
  let index = Math.floor(Math.random() * 6);
  return index;
}
let colors = [
  "bg-primary",
  "bg-secondary",
  "bg-success",
  "bg-danger",
  "bg-warning",
  "bg-info",
];

let colorIndex = randColor();

function Message({ message }) {
  let bgColor = colors[colorIndex];
  let accentColor = colors[(colorIndex + 1) % colors.length];
  let messageInfo = message;

  //Useful way of looping array around: [(props.dayNum) % legs.legs.length]

  console.log("Main -", bgColor);
  console.log("Accent -", accentColor);

  return (
    <Card
      className={`text-white ${bgColor} mb-3 col mx-2`}
      style={{ minWidth: "auto" }}
    >
      <CardBody style={{ display: "flex" }}>
        <CardImg
          src={
            messageInfo.imgURL
              ? messageInfo.imgURL
              : `https://picsum.photos/256/186`
          }
          style={{ height: "auto", width: "15em" }}
        />
        <span className="m-3">
          <CardHeader tag="h1" className={`text-white mb-3 ${accentColor}`}>
            {messageInfo.username}
          </CardHeader>
          <CardTitle style={{ fontSize: "2rem" }}>
            {messageInfo.subject}
          </CardTitle>
          <CardText style={{ fontSize: "1.6rem" }}>
            {messageInfo.message}
          </CardText>
        </span>
      </CardBody>
      <CardFooter style={{ display: "flex", flexDirection: "row-reverse" }}>
        {messageInfo.create}
      </CardFooter>
    </Card>
  );
}

export default Message;
