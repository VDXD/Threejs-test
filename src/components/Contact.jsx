import React, { useEffect, useState } from "react";
import InstagramIcon from "/assets/instagram-2016-5.svg";
import GitHubIcon from "/assets/github-icon-1.svg";
import LinkedInIcon from "/assets/linkedin-icon-2.svg";
import DiscordIcon from "/assets/discord-6.svg";

// const Contact = () => {
//   return (
//     <section className="w-full h-screen flex items-center justify-center bg-white text-black pb-40">
//       <div className="max-w-4xl text-center">
//         <h1 className="text-4xl font-bold">Let's Connect!</h1>
//         <p className="mt-4 text-lg text-gray-600 leading-relaxed">
//           If you're here to talk tech, share memes, or just want to stalk me
//           online, you’re in the right place! Check out my socials below.
//           <br />
//           <br />
//           Also, if you're feeling adventurous, join my{" "}
//           <a
//             href="https://discord.gg/yourdiscordlink"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="font-semibold text-blue-600 hover:underline"
//           >
//             Discord server
//           </a>{" "}
//           where I break things and fix them in real-time. 🚀
//         </p>

//         <h2 className="mt-6 text-2xl font-semibold">Socials</h2>
//         <div className="mt-6 flex justify-center gap-6 flex-wrap">
//           <SocialIcon
//             name="Instagram"
//             svgPath={InstagramIcon}
//             link="https://www.instagram.com/yourusername"
//           />
//           <SocialIcon
//             name="GitHub"
//             svgPath={GitHubIcon}
//             link="https://github.com/yourusername"
//           />
//           <SocialIcon
//             name="LinkedIn"
//             svgPath={LinkedInIcon}
//             link="https://www.linkedin.com/in/yourusername"
//           />
//           <SocialIcon
//             name="Discord"
//             svgPath={DiscordIcon}
//             link="https://discord.gg/yourdiscordlink"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// const SocialIcon = ({ name, svgPath, link }) => (
//   <a
//     href={link}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex flex-col items-center"
//   >
//     <img
//       src={svgPath}
//       alt={name}
//       className="w-12 h-12 transition-transform duration-200 hover:scale-110"
//     />
//     <span className="mt-2 text-sm">{name}</span>
//   </a>
// );

// export default Contact;

const Contact = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-white text-black pb-40">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold">Let's Connect!</h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Want to stalk me on the internet or just chat about cool tech? Check
          out my socials below!
        </p>

        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          <SocialIcon
            name="Instagram"
            svgPath={InstagramIcon}
            link="https://www.instagram.com/kitsuneee.__/"
          />
          <SocialIcon
            name="GitHub"
            svgPath={GitHubIcon}
            link="https://github.com/VDXD"
          />
          <SocialIcon
            name="LinkedIn"
            svgPath={LinkedInIcon}
            link="https://www.linkedin.com/in/vedant-rajput-3591b2290/"
          />
        </div>

       
        <p className="mt-6 font-semibold text-lg">
          Join my server, Meet cool peoples(me)
        </p>

        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          <SocialIcon
            name="Discord"
            svgPath={DiscordIcon}
            link="https://discord.gg/fUzDcer9"
          />
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ name, svgPath, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center"
  >
    <img
      src={svgPath}
      alt={name}
      className="w-12 h-12 transition-transform duration-200 hover:scale-110"
    />
    <span className="mt-2 text-sm">{name}</span>
  </a>
);

export default Contact;
