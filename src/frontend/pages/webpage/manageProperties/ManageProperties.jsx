import React, { useState } from "react";
import "./style.css";
import axios from "axios";
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

  //   Property image adding
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const handleRemoveImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
  };

  const [floorPlans, setFloorPlans] = useState([]);

  const handleFloorPlansChange = (e) => {
    const files = Array.from(e.target.files);
    setFloorPlans((prev) => [...prev, ...files]);
  };

  const handleRemoveFloorPlanImage = (index) => {
    const updated = floorPlans.filter((_, i) => i !== index);
    setFloorPlans(updated);
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    const formData = new FormData();

    // Collect form values
    const adtitle = e.target.title.value;
    const price = parseFloat(e.target.price.value);
    const types = e.target["property-type"].value;
    const tenure = e.target["tenure-type"].value;
    const beds = bedrooms;
    const bath = bathrooms;
    const description = e.target.desc.value;
    const shortdescription = shortDesc;
    const address = e.target.address.value;

    // Collect features (checkbox values)
    const features = [];
    [
      "parking",
      "garden",
      "lift-access",
      "balcony",
      "rooftop-access",
      "generator-access",
      "supply-water",
      "supply-gas",
      "internet-connection",
      "dedicated-security",
      "cctv-camera",
    ].forEach((f) => {
      if (e.target[f]?.checked) features.push(f);
    });

    // Convert images to base64 strings
    const convertToBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

    try {
      const imageBase64 = await Promise.all(images.map(convertToBase64));

      // OPTIONAL floorplan handling
      const floorplanInput = document.getElementById("property-floor-images");
      const floorplanFiles = Array.from(floorplanInput?.files || []);
      const floorplans = await Promise.all(floorplanFiles.map(convertToBase64));

      const payload = {
        adtitle,
        price,
        types,
        tenure,
        feature: features.join(","),
        beds,
        bath,
        description,
        shortdescription,
        address,
        images: imageBase64,
        floorplans,
      };

      const res = await axios.post(
        "http://localhost:5000/api/property/add-property",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);
      resetForm();
      setImages([]);
      setIsAdding(false);
    } catch (err) {
      console.error("Property add failed:", err);
      alert("Failed to add property.");
    }
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
            <form className="properties-form" onSubmit={handleAddProperty}>
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
                    <option value="">-- Select Tenure Type --</option>
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
                <div className="input">
                  <label htmlFor="address">
                    Property Address
                    <span className="must-input">*</span>
                  </label>
                  <input type="text" name="address" id="address" required />
                </div>
                <div className="input">
                  <label>
                    Property images
                    <span className="must-input">*</span>
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    name="property-image"
                    id="property-images"
                    multiple
                    onChange={handleImageChange}
                    required
                  />

                  <div className="image-preview-list">
                    {images.map((img, index) => (
                      <div key={index} className="image-preview">
                        <img
                          src={URL.createObjectURL(img)}
                          alt={`preview-${index}`}
                          height={80}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="input">
                  <label>Property floor plans</label>

                  <input
                    type="file"
                    accept="image/*"
                    name="property-floor-image"
                    id="property-floor-images"
                    multiple
                    onChange={handleFloorPlansChange}
                  />

                  <div className="image-preview-list">
                    {floorPlans.map((img, index) => (
                      <div key={index} className="image-preview">
                        <img
                          src={URL.createObjectURL(img)}
                          alt={`preview-${index}`}
                          height={80}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveFloorPlanImage(index)}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="button">
                <button type="submit">Add property</button>
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
