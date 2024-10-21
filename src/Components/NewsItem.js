// import React, { Component } from "react";

// export default class NewsItem extends Component {
//   render() {
//     let {title,description,imgUrl,readMore} = this.props;
//     return (
//       <div>
//         <div style={{ width: "400px", height: "400px" }}>
//           <div className="card" style={{ width: "18 rem" }}>
//             <img src={imgUrl} className="card-img-top" alt="..." height="200px" />
//             <div className="card-body">
//               <h5 className="card-title">{title}</h5>
//               <p className="card-text">{description}</p>
//               <a href={readMore} className="btn btn-dark">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React from "react";

const NewsItem = ({ title, description, imgUrl, readMore }) => {
  return (
    <div>
      <div style={{ width: "400px", height: "400px" }}>
        <div className="card" style={{ width: "18 rem" }}>
          <img src={imgUrl} className="card-img-top" alt="..." height="200px" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={readMore} className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;