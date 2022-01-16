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

function Message(props) {
  let bgColor = colors[colorIndex];
  let accentColor = colors[colorIndex - 1];
  let messageInfo = props.message;

  return (
    <Card className={`text-white ${bgColor} mb-3`}>
      <CardBody style={{ display: "flex" }}>
        <CardImg
          src={
            messageInfo.imgURL
              ? messageInfo.imgURL
              : `https://picsum.photos/256/186`
          }
          style={{ height: "50%", width: "50%" }}
        />
        <span className="m-3">
          <CardHeader tag="h1" className={`text-white mb-3 ${accentColor}`}>
            {messageInfo.username}
          </CardHeader>
          <CardTitle tag="h2">{messageInfo.subject}</CardTitle>
          <CardText tag="h4">{messageInfo.message}</CardText>
        </span>
      </CardBody>
      <CardFooter style={{ display: "flex", flexDirection: "row-reverse" }}>
        {messageInfo.create}
      </CardFooter>
    </Card>
  );
}

export default Message;
