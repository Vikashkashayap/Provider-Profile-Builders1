import React from 'react';

interface ProfileData {
  name: string;
  bio: string;
  profilePicture: string;
  specializations: string[];
  services: string[];
  yearsOfExperience: number;
  email: string;
  phoneNumber: string;
  workingHours: string[];
}

interface ProfilePreviewProps {
  formData: ProfileData;
}

const ProfilePreview: React.FC<ProfilePreviewProps> = ({ formData }) => {
  return (
    <div className="profile-preview-container">
      <h2>Profile Preview</h2>
      
      <div className="preview-section">
        <h3>Basic Information</h3>
        {formData.profilePicture && (
          <img
            src={formData.profilePicture}
            alt="Profile"
            className="preview-profile-picture"
          />
        )}
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Bio:</strong> {formData.bio}</p>
      </div>

      <div className="preview-section">
        <h3>Services & Expertise</h3>
        <p><strong>Specializations:</strong></p>
        <ul>
          {formData.specializations.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
        
        <p><strong>Services:</strong></p>
        <ul>
          {formData.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        
        <p><strong>Years of Experience:</strong> {formData.yearsOfExperience}</p>
      </div>

      <div className="preview-section">
        <h3>Contact & Availability</h3>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phoneNumber}</p>
        <p><strong>Available Days:</strong></p>
        <ul>
          {formData.workingHours.map((day) => (
            <li key={day}>{day}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePreview; 