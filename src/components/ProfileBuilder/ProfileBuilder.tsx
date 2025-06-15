import React, { useState } from 'react';
import BasicInformation from './BasicInformation';
import ServicesExpertise from './ServicesExpertise';
import ContactAvailability from './ContactAvailability';
import ProfilePreview from './ProfilePreview';

interface FormData {
  // Basic Information
  name: string;
  bio: string;
  profilePicture: string;
  
  // Services & Expertise
  specializations: string[];
  services: string[];
  yearsOfExperience: number;
  
  // Contact & Availability
  email: string;
  phoneNumber: string;
  workingHours: string[];
}

const initialFormData: FormData = {
  name: '',
  bio: '',
  profilePicture: '',
  specializations: [],
  services: [],
  yearsOfExperience: 0,
  email: '',
  phoneNumber: '',
  workingHours: [],
};

const ProfileBuilder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile Data:', formData);
    alert('Profile saved successfully!');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInformation
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 2:
        return (
          <ServicesExpertise
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <ContactAvailability
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return <ProfilePreview formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="profile-builder">
      <div className="progress-bar">
        <div className="steps">
          {['Basic Information', 'Services & Expertise', 'Contact & Availability', 'Preview'].map(
            (step, index) => (
              <div
                key={step}
                className={`step ${currentStep >= index + 1 ? 'active' : ''}`}
              >
                {step}
              </div>
            )
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {renderStep()}

        <div className="navigation-buttons">
          {currentStep > 1 && (
            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
          )}
          
          {currentStep < 4 && (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          )}
          
          {currentStep === 4 && (
            <button type="submit">
              Save Profile
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileBuilder; 