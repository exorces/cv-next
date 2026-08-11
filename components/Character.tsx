"use client";

import Image from "next/image";

export default function Character() {

return(
    <div className="character-container">
      <button className="character-btn" onClick={imagePressed}>
              <Image
                src="/media/character.gif"
                alt=""
                width={1000}
                height={1000}
                className="character"
                unoptimized
                priority
              />
      </button>
            </div>
);

function imagePressed(){
  console.log("YEOUCHH")
}

}