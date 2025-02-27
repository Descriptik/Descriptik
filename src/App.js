import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('enhance');
  const [description, setDescription] = useState('');
  const [enhancedDescription, setEnhancedDescription] = useState('');
  const [characteristics, setCharacteristics] = useState({
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    location: '',
    features: ''
  });
  const [generatedDescription, setGeneratedDescription] = useState('');

  const handleEnhance = async (e) => {
    e.preventDefault();
    // Here you would add your API call
    setEnhancedDescription("Mock enhanced description: " + description + " with modern amenities and spacious layout.");
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    // Here you would add your API call
    const desc = `New ${characteristics.bedrooms}BR/${characteristics.bathrooms}BA home in ${characteristics.location} featuring ${characteristics.features}. ${characteristics.sqft} sqft of living space.`;
    setGeneratedDescription(desc);
  };

  const handleCharacteristicsChange = (e) => {
    setCharacteristics({
      ...characteristics,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <h1>Property Description Assistant</h1>
      
      <div className="tabs">
        <button 
          onClick={() => setActiveTab('enhance')}
          className={activeTab === 'enhance' ? 'active' : ''}
        >
          Enhance Description
        </button>
        <button 
          onClick={() => setActiveTab('generate')}
          className={activeTab === 'generate' ? 'active' : ''}
        >
          Generate New
        </button>
      </div>

      {activeTab === 'enhance' && (
        <div className="content">
          <form onSubmit={handleEnhance}>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Paste existing description here..."
              rows="6"
            />
            <button type="submit">Enhance Description</button>
          </form>
          {enhancedDescription && (
            <div className="result">
              <h3>Enhanced Description:</h3>
              <p>{enhancedDescription}</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'generate' && (
        <div className="content">
          <form onSubmit={handleGenerate}>
            <div className="form-group">
              <input
                type="text"
                name="bedrooms"
                placeholder="Number of bedrooms"
                value={characteristics.bedrooms}
                onChange={handleCharacteristicsChange}
              />
              <input
                type="text"
                name="bathrooms"
                placeholder="Number of bathrooms"
                value={characteristics.bathrooms}
                onChange={handleCharacteristicsChange}
              />
              <input
                type="text"
                name="sqft"
                placeholder="Square footage"
                value={characteristics.sqft}
                onChange={handleCharacteristicsChange}
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={characteristics.location}
                onChange={handleCharacteristicsChange}
              />
              <input
                type="text"
                name="features"
                placeholder="Special features"
                value={characteristics.features}
                onChange={handleCharacteristicsChange}
              />
            </div>
            <button type="submit">Generate Description</button>
          </form>
          {generatedDescription && (
            <div className="result">
              <h3>Generated Description:</h3>
              <p>{generatedDescription}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
