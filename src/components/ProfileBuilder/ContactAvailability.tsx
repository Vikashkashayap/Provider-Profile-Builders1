import React from 'react';

interface ContactAvailabilityProps {
  formData: {
    email: string;
    phoneNumber: string;
    workingHours: string[];
  };
  updateFormData: (data: Partial<{ email: string; phoneNumber: string; workingHours: string[] }>) => void;
}

const workingDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const ContactAvailability: React.FC<ContactAvailabilityProps> = ({ formData, updateFormData }) => {
  const handleWorkingHoursChange = (day: string) => {
    const updatedWorkingHours = formData.workingHours.includes(day)
      ? formData.workingHours.filter(d => d !== day)
      : [...formData.workingHours, day];
    updateFormData({ workingHours: updatedWorkingHours });
  };

  return (
    <div className="form-step">
      <h2>Contact & Availability</h2>
      
      <div className="form-group">
        <label htmlFor="email">Contact Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={formData.phoneNumber}
          onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div className="form-group">
        <label>Available Working Days</label>
        <div className="checkbox-group">
          {workingDays.map((day) => (
            <label key={day} className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.workingHours.includes(day)}
                onChange={() => handleWorkingHoursChange(day)}
              />
              {day}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactAvailability; 