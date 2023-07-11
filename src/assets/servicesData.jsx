import { FaTshirt, FaAd, FaTv } from "react-icons/fa"
import { MdMoney } from "react-icons/md"

const fashion = <FaTshirt />
const advertising = <FaAd />
const entertainment = <FaTv />
const money = <MdMoney />

export const services = [{
  icon: fashion,
  name: 'clothing',
  description: 'We offer a wide variety of stylish clothing for men, women and children. Our clothing is affordable and high quality.'
},
{
  icon: advertising,
  name: 'advertising',
  description: 'We offer affordable advertising options for businesses of all sizes. We help you reach a global audience with our advertising options.'
},
{
  icon: money,
  name: 'sending money',
  description: 'We offer a fast and secure way to send money to friends and family around the world.'
},
{
  icon: entertainment,
  name: 'entertainment',
  description: 'We offer a platform for people to watch movies and TV shows, play games and listen to music.'
}
]