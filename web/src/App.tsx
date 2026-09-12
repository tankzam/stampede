import React, { useState } from 'react'
import './App.css'

type View = 'radar' | 'flow' | 'map'

export default function App() {
  const [view, setView] = useState<View>('radar')
  const [statusError, setStatusError] = useState<string | null>(null)

  return (
    <div className={`app view-${view}`}>
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <h1>STAMPEDE</h1>
          <span className="subtitle">Wallet Rotation Explorer</span>
        </div>
        <div className="header-nav">
          <button 
            className={`nav-btn ${view === 'radar' ? 'active' : ''}`}
            onClick={() => setView('radar')}
          >
            📊 Radar
          </button>
          <button 
            className={`nav-btn ${view === 'flow' ? 'active' : ''}`}
            onClick={() => setView('flow')}
          >
            🌊 Flow
          </button>
          <button 
            className={`nav-btn ${view === 'map' ? 'active' : ''}`}
            onClick={() => setView('map')}
          >
            🗺️ Map
          </button>
        </div>
        <div className="header-right">
          <span className="status">● Connected</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {view === 'radar' && (
          <div className="view-container radar-view">
            <aside className="sidebar-left">
              <div className="panel">
                <h3>Filters</h3>
                <div className="filter-group">
                  <label>Min Wallets</label>
                  <input type="number" defaultValue="3" min="1" />
                </div>
                <div className="filter-group">
                  <label>Time Window</label>
                  <select>
                    <option>5 min</option>
                    <option selected>30 min</option>
                    <option>2 hours</option>
                  </select>
                </div>
                <div className="filter-group">
                  <label>Risk Level</label>
                  <select>
                    <option>Conservative</option>
                    <option selected>Balanced</option>
                    <option>Aggressive</option>
                  </select>
                </div>
                <button className="btn-primary">Apply Filters</button>
              </div>

              <div className="panel mt-4">
                <h3>ℹ️ About Radar</h3>
                <p className="help-text">
                  Shows top tokens ranked by inflow, wallet activity, and market sentiment.
                </p>
              </div>
            </aside>

            <section className="main-panel">
              <div className="panel-header">
                <h2>Top Tokens</h2>
                <span className="count">24 tokens tracked</span>
              </div>

              <div className="radar-grid">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="radar-card">
                    <div className="card-header">
                      <h4>TOKEN{i}</h4>
                      <span className="risk-badge safe">✓ Safe</span>
                    </div>
                    <div className="card-stats">
                      <div className="stat">
                        <span className="label">Inflow</span>
                        <span className="value">$2.4M</span>
                      </div>
                      <div className="stat">
                        <span className="label">Wallets</span>
                        <span className="value">1,234</span>
                      </div>
                      <div className="stat">
                        <span className="label">Age</span>
                        <span className="value">3 days</span>
                      </div>
                    </div>
                    <div className="card-flags">
                      <span className="flag">Verified</span>
                      <span className="flag">Audited</span>
                    </div>
                    <button className="btn-secondary btn-block">View Details</button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {view === 'flow' && (
          <div className="view-container flow-view">
            <aside className="sidebar-left">
              <div className="panel">
                <h3>Coin Selection</h3>
                <div className="search-box">
                  <input type="text" placeholder="Search token..." />
                </div>
                <div className="recent-list">
                  <p className="label-small">Recent</p>
                  <div className="list-item">SOL</div>
                  <div className="list-item">PUMP</div>
                  <div className="list-item">AI16Z</div>
                </div>
              </div>

              <div className="panel mt-4">
                <h3>ℹ️ What is Flow?</h3>
                <p className="help-text">
                  Shows how a single token connects to others through wallet rotations.
                </p>
              </div>
            </aside>

            <section className="main-panel">
              <div className="panel-header">
                <h2>Flow Diagram</h2>
              </div>

              <div className="flow-canvas">
                <div className="flow-placeholder">
                  <span>Select a token to view flow</span>
                </div>
              </div>

              <div className="panel mt-4">
                <h3>Top Sequences</h3>
                <div className="sequence-list">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="sequence-item">
                      <div className="seq-header">
                        <span className="pair">SOL → {i === 1 ? 'PUMP' : i === 2 ? 'AI16Z' : 'ORCA'}</span>
                        <span className="wallet-count">423 wallets</span>
                      </div>
                      <div className="seq-details">
                        <span>Avg Gap: 8 min</span>
                        <span>Grade: Clean</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {view === 'map' && (
          <div className="view-container map-view">
            <aside className="sidebar-left">
              <div className="panel">
                <h3>Map Controls</h3>
                <div className="control-group">
                  <label>Time Range</label>
                  <input type="range" min="0" max="100" />
                  <span className="time-label">Last 30 min</span>
                </div>
                <div className="control-group">
                  <label>
                    <input type="checkbox" defaultChecked /> Live Updates
                  </label>
                </div>
                <div className="control-group">
                  <label>
                    <input type="checkbox" /> Show Ambiguous
                  </label>
                </div>
              </div>

              <div className="panel mt-4">
                <h3>ℹ️ What is Map?</h3>
                <p className="help-text">
                  3D network showing all token connections with real-time activity pulses.
                </p>
              </div>
            </aside>

            <section className="main-panel">
              <div className="panel-header">
                <h2>Network Map</h2>
                <div className="map-stats">
                  <span>42 tokens</span>
                  <span>156 edges</span>
                  <span>2.4K wallets</span>
                </div>
              </div>

              <div className="map-canvas">
                <div className="map-placeholder">
                  <span>3D Network Visualization (Loading...)</span>
                </div>
              </div>
            </section>

            <aside className="sidebar-right">
              <div className="panel">
                <h3>Activity Feed</h3>
                <div className="feed-list">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="feed-item">
                      <span className="time">2 min ago</span>
                      <span className="event">SOL → PUMP</span>
                      <span className="amount">$12.3K</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>

      {/* Error Banner */}
      {statusError && (
        <div className="error-banner">
          <span>⚠️ {statusError}</span>
        </div>
      )}
    </div>
  )
}
