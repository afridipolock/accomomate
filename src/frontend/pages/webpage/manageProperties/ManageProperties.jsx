import React, { useState } from "react";
import "./style.css";
const ManageProperties = () => {
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handlePriceChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setPrice(onlyNumbers);
  };

  const handleBedroomChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setBedrooms(onlyNumbers);
  };
  const handleBathroomChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setBathrooms(onlyNumbers);
  };
  const handleShortDescChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 300) {
      setShortDesc(inputValue);
    }
  };
  const resetForm = () => {
    setPrice("");
    setBedrooms("");
    setBathrooms("");
    setShortDesc("");
  };

  return (
    <div className="desktop-window">
      <div className="desktop-manage-properties">
        <div className="add-new-properties">
          <div className="title">
            <span>Add new properties</span>
            <button
              onClick={() => {
                if (isAdding) {
                  resetForm();
                }
                setIsAdding(!isAdding);
              }}
            >
              {isAdding ? "Back" : "Add Properties"}
            </button>
          </div>
          {isAdding && (
            <form className="properties-form">
              <div className="inputs">
                <div className="input">
                  <label htmlFor="title">
                    Title <span className="must-input">*</span>
                  </label>
                  <input type="text" name="title" id="title" required />
                </div>
                <div className="input">
                  <label htmlFor="price">
                    Price <span className="must-input">*</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    required
                    onChange={handlePriceChange}
                    value={price}
                  />
                </div>
                <div className="input">
                  <label htmlFor="property-type">
                    Property type <span className="must-input">*</span>
                  </label>
                  <select name="property-type" id="property-type" required>
                    <option value="">-- Select Property Type --</option>
                    <option value="whole">Whole Property</option>
                    <option value="shared">Shared Property</option>
                  </select>
                </div>
                <div className="input">
                  <label htmlFor="tenure-type">
                    Tenure type <span className="must-input">*</span>
                  </label>
                  <select name="tenure-type" id="tenure-type" required>
                    <option value="">-- Select Property Type --</option>
                    <option value="short">Short Term</option>
                    <option value="long">Long Term</option>
                    <option value="freehold">Freehold</option>
                  </select>
                </div>
                <div className="input-checkbox">
                  <label htmlFor="feature">
                    Property Feature <span className="must-input">*</span>
                  </label>
                  <div className="all-checkbox">
                    <div className="checkbox">
                      <input type="checkbox" name="parking" id="parking" />
                      <label htmlFor="parking">Have parking</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" name="garden" id="garden" />
                      <label htmlFor="garden">Have garden</label>
                    </div>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        name="lift-access"
                        id="lift-access"
                      />
                      <label htmlFor="lift-access">Lift access</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" name="balcony" id="balcony" />
                      <label htmlFor="balcony">Have balcony</label>
                    </div>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        name="rooftop-access"
                        id="rooftop-access"
                      />
                      <label htmlFor="rooftop-access">Rooftop access</label>
                    </div>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        name="generator-access"
                        id="generator-access"
                      />
                      <label htmlFor="generator-access">Generator access</label>
                    </div>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        name="supply-water"
                        id="supply-water"
                      />
                      <label htmlFor="supply-water">Supply water</label>
                    </div>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        name="supply-gas"
                        id="supply-gas"
                      />
                      <label htmlFor="supply-gas">Supply gas</label>
                    </div>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        name="internet-connection"
                        id="internet-connection"
                      />
                      <label htmlFor="internet-connection">
                        Internet connection
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        name="dedicated-security"
                        id="dedicated-security"
                      />
                      <label htmlFor="dedicated-security">Security Guard</label>
                    </div>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        name="cctv-camera"
                        id="cctv-camera"
                      />
                      <label htmlFor="cctv-camera">CCTV Camera</label>
                    </div>
                  </div>
                  <div className="input">
                    <label htmlFor="bed-rooms">
                      Number of bedrooms <span className="must-input">*</span>
                    </label>
                    <input
                      type="text"
                      name="bed-rooms"
                      id="bed-rooms"
                      required
                      onChange={handleBedroomChange}
                      value={bedrooms}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="bath-rooms">
                      Number of bathrooms <span className="must-input">*</span>
                    </label>
                    <input
                      type="text"
                      name="bath-rooms"
                      id="bath-rooms"
                      required
                      onChange={handleBathroomChange}
                      value={bathrooms}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="desc">
                      Property Description
                      <span className="must-input">*</span>
                    </label>
                    <textarea
                      name="desc"
                      id="desc"
                      required
                      rows={4}
                      cols={50}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="short-desc">
                      Property Short Description for listing
                      <span className="must-input">*</span>
                      <span className="max-length">
                        (Character limit: {shortDesc.length}/300)
                      </span>
                    </label>
                    <textarea
                      name="short-desc"
                      id="short-desc"
                      required
                      value={shortDesc}
                      rows={2}
                      cols={50}
                      onChange={handleShortDescChange}
                      maxLength={300}
                    />
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="properties-list">all</div>
      </div>
    </div>
  );
};

export default ManageProperties;
