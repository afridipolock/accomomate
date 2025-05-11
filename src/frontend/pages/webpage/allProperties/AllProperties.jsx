import React, { useState } from "react";
import "./style.css";

const AllProperties = () => {
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

  const handleApply = () => {
    console.log("Applied Filters:", filters);
    // You can now fetch or filter based on this
  };

  const handleReset = () => {
    setFilters(initialFilters);
  };

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
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
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
              {["short-term", "long-term", "freehold"].map((val) => (
                <div className="filter-value-checkbox" key={val}>
                  <input
                    type="checkbox"
                    id={val}
                    checked={filters.tenure.includes(val)}
                    onChange={handleCheckboxChange("tenure", val)}
                  />
                  <label htmlFor={val}>{val.replace("-", " ")}</label>
                </div>
              ))}
            </div>

            {/* Property Types */}
            <div className="filter">
              <div className="filter-title">Property Types</div>
              {["whole-properties", "shared-properties"].map((val) => (
                <div className="filter-value-checkbox" key={val}>
                  <input
                    type="checkbox"
                    id={val}
                    checked={filters.propertyType.includes(val)}
                    onChange={handleCheckboxChange("propertyType", val)}
                  />
                  <label htmlFor={val}>{val.replace("-", " ")}</label>
                </div>
              ))}
            </div>

            {/* Property Features */}
            <div className="filter">
              <div className="filter-title">Property must have</div>
              {["parking", "garden", "lift", "balcony", "rooftop"].map(
                (val) => (
                  <div className="filter-value-checkbox" key={val}>
                    <input
                      type="checkbox"
                      id={val}
                      checked={filters.features.includes(val)}
                      onChange={handleCheckboxChange("features", val)}
                    />
                    <label htmlFor={val}>{val.replace("-", " ")}</label>
                  </div>
                )
              )}
            </div>

            <div className="filter-apply">
              <button onClick={handleApply}>Apply filter</button>
            </div>
            <div className="filter-reset">
              <button onClick={handleReset}>Reset filter</button>
            </div>
          </div>

          <div className="right properties">
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
              <div className="property-card">
                <div className="property-card-left">
                  <div className="card-left-img"></div>
                  <div className="card-left-price"></div>
                </div>
                <div className="property-card-right">
                  <div className="card-right-title"></div>
                  <div className="card-right-info">
                    <div className="card-right-type"></div>
                    <div className="card-right-beds"></div>
                    <div className="card-right-baths"></div>
                  </div>
                  <div className="card-right-sub-title"></div>
                  <div className="card-right-address"></div>
                  <div className="card-right-contact">
                    <div className="card-right-contact-number"></div>
                    <div className="card-right-contact-mail"></div>
                    <div className="card-right-contact-save"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
