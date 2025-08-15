import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Props{
    member: {
        name: string;
        title: string;
        bio: string;
        image: string;
    }
}
const MemberCard: React.FC<Props> = ({ member }) => {
  return (
    <div 
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-blue-600 font-semibold mb-3">{member.title}</p>
        <p className="text-gray-600 mb-6 text-sm">{member.bio}</p>
        
        <div className="flex justify-center space-x-3">
          {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, iconIndex) => (
            <Link 
              key={iconIndex}
              to="#" 
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Icon size={16} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MemberCard