import React from 'react';

interface ServicesExpertiseProps {
  formData: {
    specializations: string[];
    services: string[];
    yearsOfExperience: number;
  };
  updateFormData: (data: Partial<{ specializations: string[]; services: string[]; yearsOfExperience: number }>) => void;
}

const specializations = [
  'ADHD',
  'Dyslexia',
  'Autism',
  'Speech and Language',
  'Behavioral Support',
  'Learning Disabilities',
];

const serviceOptions = [
  'Tutoring',
  'Therapy',
  'Coaching',
  'Assessment',
  'Consultation',
];

const ServicesExpertise: React.FC<ServicesExpertiseProps> = ({ formData, updateFormData }) => {
  const handleSpecializationChange = (value: string) => {
    const updatedSpecializations = formData.specializations.includes(value)
      ? formData.specializations.filter(item => item !== value)
      : [...formData.specializations, value];
    updateFormData({ specializations: updatedSpecializations });
  };

  const handleServiceChange = (value: string) => {
    const updatedServices = formData.services.includes(value)
      ? formData.services.filter(item => item !== value)
      : [...formData.services, value];
    updateFormData({ services: updatedServices });
  };

  return (
    <div className="form-step">
      <h2>Services & Expertise</h2>
      
      <div className="form-group">
        <label>Specializations</label>
        <div className="checkbox-group">
          {specializations.map((specialization) => (
            <label key={specialization} className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.specializations.includes(specialization)}
                onChange={() => handleSpecializationChange(specialization)}
              />
              {specialization}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Services Offered</label>
        <div className="checkbox-group">
          {serviceOptions.map((service) => (
            <label key={service} className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleServiceChange(service)}
              />
              {service}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="experience">Years of Experience</label>
        <input
          type="number"
          id="experience"
          min="0"
          value={formData.yearsOfExperience}
          onChange={(e) => updateFormData({ yearsOfExperience: parseInt(e.target.value) || 0 })}
          required
        />
      </div>
    </div>
  );
};

export default ServicesExpertise; 