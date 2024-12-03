
import React from 'react';
import './stats.scss';

const StatsPage = () => {
  return (
    <div className="stats-container">
      <header className="stats-header">
        <h1>Global E-Waste Statistics</h1>
        <p>Understanding the Impact of Electronic Recycling</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Annual E-Waste</h3>
          <p className="stat-number">59.4M</p>
          <p className="stat-description">Metric tons generated globally (2023)</p>
        </div>

        <div className="stat-card">
          <h3>Recycling Rate</h3>
          <p className="stat-number">17.4%</p>
          <p className="stat-description">Global proper recycling</p>
        </div>

        <div className="stat-card">
          <h3>Raw Materials</h3>
          <p className="stat-number">$62.5B</p>
          <p className="stat-description">Value in annual e-waste</p>
        </div>

        <div className="stat-card">
          <h3>CO2 Impact</h3>
          <p className="stat-number">15M</p>
          <p className="stat-description">Tons of CO2 emissions saved</p>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <h3>E-Waste Growth by Year (Million Metric Tons)</h3>
          <div className="bar-chart">
            <div className="bar-group">
              <div className="bar" style={{ height: '53.6%' }}>
                <span className="bar-value">53.6</span>
              </div>
              <span className="bar-label">2019</span>
            </div>
            <div className="bar-group">
              <div className="bar" style={{ height: '57.4%' }}>
                <span className="bar-value">57.4</span>
              </div>
              <span className="bar-label">2020</span>
            </div>
            <div className="bar-group">
              <div className="bar" style={{ height: '63.3%' }}>
                <span className="bar-value">63.3</span>
              </div>
              <span className="bar-label">2021</span>
            </div>
            <div className="bar-group">
              <div className="bar" style={{ height: '65.3%' }}>
                <span className="bar-value">65.3</span>
              </div>
              <span className="bar-label">2022</span>
            </div>
            <div className="bar-group">
              <div className="bar" style={{ height: '69.2%' }}>
                <span className="bar-value">69.2</span>
              </div>
              <span className="bar-label">2023</span>
            </div>
          </div>
        </div>

        <div className="chart-container">
          <h3>Regional Recycling Rates (%)</h3>
          <div className="horizontal-bar-chart">
            <div className="h-bar-group">
              <span className="h-bar-label">Europe</span>
              <div className="h-bar-container">
                <div className="h-bar" style={{ width: '42.5%' }}>
                  <span className="h-bar-value">42.5%</span>
                </div>
              </div>
            </div>
            <div className="h-bar-group">
              <span className="h-bar-label">Asia</span>
              <div className="h-bar-container">
                <div className="h-bar" style={{ width: '11.7%' }}>
                  <span className="h-bar-value">11.7%</span>
                </div>
              </div>
            </div>
            <div className="h-bar-group">
              <span className="h-bar-label">Americas</span>
              <div className="h-bar-container">
                <div className="h-bar" style={{ width: '9.4%' }}>
                  <span className="h-bar-value">9.4%</span>
                </div>
              </div>
            </div>
            <div className="h-bar-group">
              <span className="h-bar-label">Oceania</span>
              <div className="h-bar-container">
                <div className="h-bar" style={{ width: '8.8%' }}>
                  <span className="h-bar-value">8.8%</span>
                </div>
              </div>
            </div>
            <div className="h-bar-group">
              <span className="h-bar-label">Africa</span>
              <div className="h-bar-container">
                <div className="h-bar" style={{ width: '0.9%' }}>
                  <span className="h-bar-value">0.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pie-charts-section">
        <div className="pie-chart-container">
          <h3>E-Waste Composition</h3>
          <div className="pie-chart">
            <div className="pie-segment" style={{ '--percentage': '44.4', '--color': '#4299e1', '--rotation': '0' } as React.CSSProperties}>
              <span className="pie-label">Small Equipment</span>
            </div>
            <div className="pie-segment" style={{ '--percentage': '17.3', '--color': '#48bb78', '--rotation': '160' } as React.CSSProperties}>
              <span className="pie-label">Large Equipment</span>
            </div>
            <div className="pie-segment" style={{ '--percentage': '15.1', '--color': '#ed8936', '--rotation': '222' } as React.CSSProperties}>
              <span className="pie-label">Screens</span>
            </div>
            <div className="pie-segment" style={{ '--percentage': '13.2', '--color': '#9f7aea', '--rotation': '276' } as React.CSSProperties}>
              <span className="pie-label">IT Equipment</span>
            </div>
            <div className="pie-segment" style={{ '--percentage': '10', '--color': '#f56565', '--rotation': '324' } as React.CSSProperties}>
              <span className="pie-label">Other</span>
            </div>
          </div>
        </div>

        <div className="materials-value">
          <h3>Valuable Materials in E-Waste</h3>
          <div className="materials-grid">
            <div className="material-item">
              <span className="material-icon">Au</span>
              <span className="material-name">Gold</span>
              <span className="material-value">$11.2B</span>
            </div>
            <div className="material-item">
              <span className="material-icon">Cu</span>
              <span className="material-name">Copper</span>
              <span className="material-value">$9.8B</span>
            </div>
            <div className="material-item">
              <span className="material-icon">Fe</span>
              <span className="material-name">Iron</span>
              <span className="material-value">$7.6B</span>
            </div>
            <div className="material-item">
              <span className="material-icon">Al</span>
              <span className="material-name">Aluminum</span>
              <span className="material-value">$6.4B</span>
            </div>
          </div>
        </div>
      </div>

      <div className="impact-section">
        <h2>Environmental Impact Facts</h2>
        <div className="impact-grid">
          <div className="impact-card">
            <span className="impact-icon">🌍</span>
            <h4>Carbon Footprint</h4>
            <p>Proper e-waste recycling can prevent 15 million tons of CO2 emissions annually</p>
          </div>
          <div className="impact-card">
            <span className="impact-icon">💧</span>
            <h4>Water Conservation</h4>
            <p>Recycling electronics saves billions of gallons of water from mining pollution</p>
          </div>
          <div className="impact-card">
            <span className="impact-icon">🏭</span>
            <h4>Resource Recovery</h4>
            <p>One million recycled cell phones can recover 35,000 lbs of copper</p>
          </div>
          <div className="impact-card">
            <span className="impact-icon">⚡</span>
            <h4>Energy Savings</h4>
            <p>Recycling aluminum uses 95% less energy than producing new aluminum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;