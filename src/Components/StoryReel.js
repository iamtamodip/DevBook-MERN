import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://cdn.shopify.com/s/files/1/1311/8543/products/stark_tony_large.jpg?v=1538687289"
        profileSrc="https://images-na.ssl-images-amazon.com/images/I/61jjzervMjL._AC_UY550_.jpg"
        title="Tony Stark"
      />
      <Story
        image="https://www.denofgeek.com/wp-content/uploads/2021/03/the-dark-knight-rises.jpg?fit=1920%2C1080"
        profileSrc="https://i.pinimg.com/originals/e3/9d/27/e39d27bb10d396f4e654c69913b8f4cf.jpg"
        title="Bruce Wayne"
      />
      <Story
        image="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiqbNl4Wr2FihXP13imPVOSZxT4SSiXSNxA&usqp=CAU"
        title="Captain Rogers"
      />
      <Story
        image="https://ca-times.brightspotcdn.com/dims4/default/162f7f7/2147483647/strip/true/crop/600x400+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb0%2Ff5%2Feba989508c59b122ba64c063dfaf%2Flat-ironwidow-l1cfo3nc20100429153417"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3vOBWJSMyAISS6YGUZKzETH0UshI-mrieZ5y6eTCPUIJCMCT7eJ1_MRaV4rSUb40tVoA&usqp=CAU"
        title="Natasha Romanoff"
      />
      <Story
        image="https://www.indiewire.com/wp-content/uploads/2019/04/D5Up3sIW0AEMM3R.jpg?w=780"
        profileSrc="data:image/jpeg;base64,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"
        title="Thor"
      />
    </div>
  );
}

export default StoryReel;
