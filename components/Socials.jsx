import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/AyushbLM10" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ayush-bhatt-545177262/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/ayush___b/" },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
          {item.icon}
        </Link>
      })}

    </div>
  )
}

export default Socials