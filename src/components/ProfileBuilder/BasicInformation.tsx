import React, { useRef, useState } from 'react';

interface BasicInformationProps {
  formData: {
    name: string;
    bio: string;
    profilePicture: string;
  };
  updateFormData: (data: Partial<{ name: string; bio: string; profilePicture: string }>) => void;
}

const BasicInformation: React.FC<BasicInformationProps> = ({ formData, updateFormData }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewError, setPreviewError] = useState<string>('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setPreviewError('');

    if (file) {
      // Check file type
      if (!file.type.startsWith('image/')) {
        setPreviewError('Please upload an image file');
        return;
      }

      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setPreviewError('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        updateFormData({ profilePicture: result });
      };
      reader.onerror = () => {
        setPreviewError('Error reading file');
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  

  const removeImage = () => {
    updateFormData({ profilePicture: '' });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="form-step">
      <h2>Basic Information</h2>
      <div className="form-group">
        <label htmlFor="name">Provider Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => updateFormData({ name: e.target.value })}
          placeholder="Enter your full name"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="bio">Profile Bio</label>
        <textarea
          id="bio"
          value={formData.bio}
          onChange={(e) => updateFormData({ bio: e.target.value })}
          placeholder="Tell us about yourself and your experience..."
          rows={4}
          required
        />
      </div>

      <div className="form-group">
        <label>Profile Picture</label>
        <div className="profile-picture-section">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            style={{ display: 'none' }}
          />
          
          {formData.profilePicture ? (
            <div className="profile-image-container">
              <img
                src={formData.profilePicture}
                alt="Profile Preview"
                className="profile-preview"
              />
              <button
                type="button"
                onClick={removeImage}
                className="remove-image-btn"
                aria-label="Remove image"
              >
                ×
              </button>
            </div>
          ) : (
            <div className="upload-placeholder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          )}
          
          <div className="upload-controls">
            <button
              type="button"
              onClick={triggerFileInput}
              className="upload-btn"
            >
              {formData.profilePicture ? 'Change Picture' : 'Upload Picture'}
            </button>
            {previewError && (
              <p className="error-message">{previewError}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation; 