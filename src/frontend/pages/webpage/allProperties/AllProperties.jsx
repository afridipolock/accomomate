import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllProperties = ({ property }) => {
  const initialFilters = {
    radius: "",
    availability: [],
    minPrice: "",
    maxPrice: "",
    minBeds: "",
    maxBeds: "",
    minBaths: "",
    maxBaths: "",
    tenure: [],
    propertyType: [],
    features: [],
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleSelectChange = (key) => (e) => {
    setFilters({ ...filters, [key]: e.target.value });
  };

  const handleCheckboxChange = (key, value) => (e) => {
    const checked = e.target.checked;
    setFilters((prev) => {
      const current = prev[key];
      const updated = checked
        ? [...current, value]
        : current.filter((item) => item !== value);
      return { ...prev, [key]: updated };
    });
  };

  // const handleApply = () => {
  //   console.log("Applied Filters:", filters);
  //   // You can now fetch or filter based on this
  // };

  const generateOptions = (count, step = 1, prefix = "") =>
    Array.from({ length: count }, (_, i) => {
      const value = (i + 1) * step;
      return (
        <option key={value} value={value}>
          {prefix}
          {value.toLocaleString()}
        </option>
      );
    });

  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  // Property details
  const navigate = useNavigate();
  const handlePropertyCardClick = () => {
    navigate(`/property?id=${property.id}`);
  };
  // Get property
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/property/get-properties"
        );
        setProperties(res.data);
      } catch (err) {
        console.error("Failed to fetch properties:", err);
      }
    };

    fetchProperties();
  }, []);

  // filter property
  const [allProperties, setAllProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/property/get-properties"
        );
        setAllProperties(res.data);
        setFilteredProperties(res.data);
      } catch (err) {
        console.error("Failed to fetch properties:", err);
      }
    };

    fetchProperties();
  }, []);
  const handleApply = () => {
    let filtered = allProperties;

    // Apply availability filter
    if (filters.availability.length > 0) {
      filtered = filtered.filter((property) =>
        filters.availability.includes(property.availability)
      );
    }

    // Apply price filters
    if (filters.minPrice) {
      filtered = filtered.filter(
        (property) => property.price >= parseInt(filters.minPrice)
      );
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(
        (property) => property.price <= parseInt(filters.maxPrice)
      );
    }

    // Apply beds filters
    if (filters.minBeds) {
      filtered = filtered.filter(
        (property) => property.beds >= parseInt(filters.minBeds)
      );
    }
    if (filters.maxBeds) {
      filtered = filtered.filter(
        (property) => property.beds <= parseInt(filters.maxBeds)
      );
    }

    // Apply baths filters
    if (filters.minBaths) {
      filtered = filtered.filter(
        (property) => property.bath >= parseInt(filters.minBaths)
      );
    }
    if (filters.maxBaths) {
      filtered = filtered.filter(
        (property) => property.bath <= parseInt(filters.maxBaths)
      );
    }

    // Apply tenure filter
    if (filters.tenure.length > 0) {
      filtered = filtered.filter((property) =>
        filters.tenure.includes(property.tenure)
      );
    }

    // Apply property type filter
    if (filters.propertyType.length > 0) {
      filtered = filtered.filter((property) =>
        filters.propertyType.includes(property.types)
      );
    }

    // Apply features filter
    if (filters.features.length > 0) {
      filtered = filtered.filter((property) =>
        filters.features.every((feature) => property.feature.includes(feature))
      );
    }

    localStorage.setItem("propertyFilters", JSON.stringify(filters));
    setFilteredProperties(filtered);
  };
  useEffect(() => {
    const savedFilters = localStorage.getItem("propertyFilters");
    if (savedFilters) {
      const parsedFilters = JSON.parse(savedFilters);
      // Only apply if current filters match the saved ones (i.e., not a manual change)
      if (JSON.stringify(filters) === JSON.stringify(parsedFilters)) {
        handleApply();
      }
    }
  }, [filters]);

  const handleReset = () => {
    setFilters(initialFilters);
    setFilteredProperties(allProperties);
    localStorage.removeItem("propertyFilters");
  };

  return (
    <div className="desktop-window">
      <div className="desktop-all-properties">
        <div className="top">
          <div className="search">
            <div className="title">
              <span>Properties for rent</span>
            </div>
            <div className="sub-title">
              <span>Search the Bangladesh's largest choice of properties</span>
            </div>
            <div className="search-info">
              <span>Search using area or district or postcode</span>
            </div>
            <div className="inputs">
              <div className="input">
                <input
                  type="text"
                  placeholder="e.g. Gulshan or 1212 or Dhaka"
                />
              </div>
              <div className="button">
                <button type="button">Find Properties</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            {/* Radius */}
            <div className="filter">
              <div className="filter-title">Max radius</div>
              <div className="filter-value-select">
                <select
                  value={filters.radius}
                  onChange={handleSelectChange("radius")}
                >
                  <option value="">This area only</option>
                  {["0.25", "0.50", "1", "3", "5", "10", "15", "20", "50"].map(
                    (km) => (
                      <option key={km} value={km}>
                        + {km} KM
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>

            {/* Availability */}
            <div className="filter">
              <div className="filter-title">Property Availability</div>
              {["available", "available-soon", "not-available"].map((val) => (
                <div className="filter-value-checkbox" key={val}>
                  <input
                    type="checkbox"
                    id={val}
                    checked={filters.availability.includes(val)}
                    onChange={handleCheckboxChange("availability", val)}
                  />
                  <label htmlFor={val}>
                    {val
                      .replace("-", " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </label>
                </div>
              ))}
            </div>

            {/* Price Filters */}
            <div className="filter">
              <div className="filter-title">Minimum Price</div>
              <div className="filter-value-select">
                <select
                  value={filters.minPrice}
                  onChange={handleSelectChange("minPrice")}
                >
                  <option value="">No minimum</option>
                  {generateOptions(10, 5000, "৳ ").map((opt) =>
                    React.cloneElement(opt, {
                      disabled:
                        filters.maxPrice &&
                        parseInt(opt.props.value) > parseInt(filters.maxPrice),
                    })
                  )}
                </select>
              </div>
            </div>

            <div className="filter">
              <div className="filter-title">Maximum Price</div>
              <div className="filter-value-select">
                <select
                  value={filters.maxPrice}
                  onChange={handleSelectChange("maxPrice")}
                >
                  <option value="">No maximum</option>
                  {generateOptions(10, 5000, "৳ ").map((opt) =>
                    React.cloneElement(opt, {
                      disabled:
                        filters.minPrice &&
                        parseInt(opt.props.value) < parseInt(filters.minPrice),
                    })
                  )}
                </select>
              </div>
            </div>

            {/* Beds and Baths */}
            <div className="filter">
              <div className="filter-title">Minimum Beds</div>
              <div className="filter-value-select">
                <select
                  value={filters.minBeds}
                  onChange={handleSelectChange("minBeds")}
                >
                  <option value="">No minimum</option>
                  {generateOptions(10).map((opt) =>
                    React.cloneElement(opt, {
                      disabled:
                        filters.maxBeds &&
                        parseInt(opt.props.value) > parseInt(filters.maxBeds),
                    })
                  )}
                </select>
              </div>
            </div>

            <div className="filter">
              <div className="filter-title">Maximum Beds</div>
              <div className="filter-value-select">
                <select
                  value={filters.maxBeds}
                  onChange={handleSelectChange("maxBeds")}
                >
                  <option value="">No maximum</option>
                  {generateOptions(10).map((opt) =>
                    React.cloneElement(opt, {
                      disabled:
                        filters.minBeds &&
                        parseInt(opt.props.value) < parseInt(filters.minBeds),
                    })
                  )}
                </select>
              </div>
            </div>

            <div className="filter">
              <div className="filter-title">Minimum Bathrooms</div>
              <div className="filter-value-select">
                <select
                  value={filters.minBaths}
                  onChange={handleSelectChange("minBaths")}
                >
                  <option value="">No minimum</option>
                  {generateOptions(10).map((opt) =>
                    React.cloneElement(opt, {
                      disabled:
                        filters.maxBaths &&
                        parseInt(opt.props.value) > parseInt(filters.maxBaths),
                    })
                  )}
                </select>
              </div>
            </div>

            <div className="filter">
              <div className="filter-title">Maximum Bathrooms</div>
              <div className="filter-value-select">
                <select
                  value={filters.maxBaths}
                  onChange={handleSelectChange("maxBaths")}
                >
                  <option value="">No maximum</option>
                  {generateOptions(10).map((opt) =>
                    React.cloneElement(opt, {
                      disabled:
                        filters.minBaths &&
                        parseInt(opt.props.value) < parseInt(filters.minBaths),
                    })
                  )}
                </select>
              </div>
            </div>

            {/* Tenure Types */}
            <div className="filter">
              <div className="filter-title">Tenure Types</div>
              {["short", "long", "freehold"].map((val) => (
                <div className="filter-value-checkbox" key={val}>
                  <input
                    type="checkbox"
                    id={val}
                    checked={filters.tenure.includes(val)}
                    onChange={handleCheckboxChange("tenure", val)}
                  />
                  <label htmlFor={val}>
                    {val === "short"
                      ? "Short Term"
                      : val === "long"
                      ? "Long Term"
                      : "Freehold"}
                  </label>
                </div>
              ))}
            </div>

            {/* Property Types */}
            <div className="filter">
              <div className="filter-title">Property Types</div>
              {["whole", "shared"].map((val) => (
                <div className="filter-value-checkbox" key={val}>
                  <input
                    type="checkbox"
                    id={val}
                    checked={filters.propertyType.includes(val)}
                    onChange={handleCheckboxChange("propertyType", val)}
                  />
                  <label htmlFor={val}>
                    {val === "whole" ? "Whole Property" : "Shared Property"}
                  </label>
                </div>
              ))}
            </div>

            {/* Property Features */}
            <div className="filter">
              <div className="filter-title">Property must have</div>
              {[
                "parking",
                "garden",
                "lift-access",
                "balcony",
                "rooftop-access",
                "internet-connection",
                "generator-access",
                "supply-water",
                "supply-gas",
                "dedicated-security",
                "cctv-camera",
              ].map((val) => (
                <div className="filter-value-checkbox" key={val}>
                  <input
                    type="checkbox"
                    id={val}
                    checked={filters.features.includes(val)}
                    onChange={handleCheckboxChange("features", val)}
                  />
                  <label htmlFor={val}>
                    {val
                      .replace("-", " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </label>
                </div>
              ))}
            </div>

            <div className="filter-apply">
              <button onClick={handleApply}>Apply filter</button>
            </div>
            <div className="filter-reset">
              <button onClick={handleReset}>Reset filter</button>
            </div>
          </div>

          <div className="middle properties">
            <div className="properties-top">
              <div className="properties-left">
                <div className="counting-result">
                  <span className="count">100</span>
                  <span>Properties found</span>
                </div>
              </div>
              <div className="properties-right">
                <div className="sorting">
                  <label htmlFor="sort">Sort:</label>
                  <select name="sort" id="sort">
                    <option value="">Recommended</option>
                    <option value="">Price lowest first</option>
                    <option value="">Price highest first</option>
                    <option value="">Newest added</option>
                    <option value="">Oldest added</option>
                  </select>
                </div>
                <div className="showing">
                  <label htmlFor="show">Show:</label>
                  <select name="show" id="show">
                    <option value="25" selected>
                      25
                    </option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="properties-bottom">
              {/* <div className="property-card" onClick={handlePropertyCardClick}>
                <div className="property-card-left">
                  <div className="card-left-img">img</div>
                  <div className="card-left-price">৳ 10,000</div>
                </div>
                <div className="property-card-right">
                  <div className="card-right-title">title</div>
                  <div className="card-right-info">
                    <div className="card-right-type">Flat</div>
                    <div className="card-right-beds">
                      <i class="fa-solid fa-bed"></i>3
                    </div>
                    <div className="card-right-baths">
                      <i class="fa-solid fa-bath"></i>2
                    </div>
                  </div>
                  <div className="card-right-description">
                    {description.length > 300
                      ? description.slice(0, 300) + "..."
                      : description}
                  </div>
                  <div className="card-right-address">Dhaka</div>
                  <div className="card-right-contact">
                    <div className="card-right-contact-owner-info">
                      <div className="card-right-contact-owner-name">
                        Mohammad Hadi
                      </div>
                      <div className="card-right-contact-number">
                        01234567890
                      </div>
                    </div>
                    <div className="card-right-contact-mail">
                      test@gmail.com
                    </div>
                    <div
                      className="card-right-contact-save"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSave();
                      }}
                    >
                      <i
                        className={
                          isSaved
                            ? "fa-solid fa-heart saved-heart"
                            : "fa-regular fa-heart"
                        }
                      ></i>
                    </div>
                  </div>
                </div>
              </div> */}
              {filteredProperties.map((prop) => (
                <div
                  className="property-card"
                  key={prop.id}
                  onClick={() => navigate(`/property?id=${prop.id}`)}
                >
                  <div className="property-card-left">
                    <div className="card-left-img">
                      {prop.mainImage ? (
                        <img src={prop.mainImage} alt="main" />
                      ) : (
                        "No Image"
                      )}
                    </div>
                    <div className="card-left-price">
                      ৳ {Number(prop.price).toLocaleString()}
                    </div>
                  </div>
                  <div className="property-card-right">
                    <div className="card-right-title">{prop.adtitle}</div>
                    <div className="card-right-info">
                      <div className="card-right-type">
                        {prop.types === "whole"
                          ? "Whole Property"
                          : prop.types === "shared"
                          ? "Shared Property"
                          : prop.types}
                      </div>

                      <div className="card-right-beds">
                        <i className="fa-solid fa-bed"></i> {prop.beds}
                      </div>
                      <div className="card-right-baths">
                        <i className="fa-solid fa-bath"></i> {prop.bath}
                      </div>
                    </div>
                    <div className="card-right-description">
                      {prop.shortdescription.length > 300
                        ? prop.shortdescription.slice(0, 300) + "..."
                        : prop.shortdescription}
                    </div>
                    <div className="card-right-address">{prop.address}</div>
                    <div className="card-right-contact">
                      <div className="card-right-contact-owner-info">
                        <div className="card-right-contact-owner-name">
                          {prop.firstname} {prop.lastname}
                        </div>
                        <div className="card-right-contact-number">
                          {prop.phone}
                        </div>
                      </div>
                      <div className="card-right-contact-mail">
                        {prop.email}
                      </div>
                      <div
                        className="card-right-contact-save"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSave();
                        }}
                      >
                        <i
                          className={
                            isSaved
                              ? "fa-solid fa-heart saved-heart"
                              : "fa-regular fa-heart"
                          }
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right-ad">bottom right</div>
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
