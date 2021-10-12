import logo from "./logo.svg";
import "./App.css";
import Phone from "./component/Phone/Phone";

function App() {
  // const h2Styling = {};
  // const bio = [
  //   {
  //     heading: "Hello How are you",
  //     author: "Md Masum",
  //   },
  //   {
  //     heading: "Hello Who are you",
  //     author: "Md Sohel",
  //   },
  //   {
  //     heading: "hello how are you",
  //     author: "Faysal",
  //   },
  // ];
  return (
    <div className="blog">
      <Phone name="Nokia" />
      {/* <FirstBlog heading="Hello How are you" author="Md Masum"></FirstBlog>
      <SecondBlog heading="Hello Who are you" author="Md Sohel"></SecondBlog>
      <ThridBLog heading="hello how are you" author="Faysal"></ThridBLog> */}
    </div>
  );
}

// function FirstBlog(props) {
//   console.log(props);
//   return (
//     <div>
//       <article className="blog2">
//         <h1>{props.heading}</h1>
//         <h2 style={{ fontSize: "20px", color: "red", fontWeight: 700 }}>
//           <h4>{props.author}</h4>
//           This is my first article
//         </h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
//           neque?
//         </p>
//       </article>
//     </div>
//   );
// }

// function SecondBlog(props) {
//   return (
//     <div>
//       <article className="blog2">
//         <h1>{props.heading}</h1>
//         <h4>{props.author}</h4>
//         <h2 style={{ fontSize: "20px", color: "red", fontWeight: 700 }}>
//           This is my second article
//         </h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
//           neque?
//         </p>
//       </article>
//     </div>
//   );
// }

// function ThridBLog(props) {
//   return (
//     <div>
//       <article className="blog2">
//         <h1>{props.heading}</h1>
//         <h4>{props.author}</h4>
//         <h2 style={{ fontSize: "20px", color: "red", fontWeight: 700 }}>
//           This is my therd article
//         </h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
//           neque?
//         </p>
//       </article>
//     </div>
//   );
// }

export default App;
