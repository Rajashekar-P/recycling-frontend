
import React from 'react';
import styles from './detailedguidelines.module.scss';
import { 
  FaRecycle, 
  FaExclamationTriangle, 
  FaCheckCircle, 
  FaTimesCircle,
  FaLeaf,
  FaTools,
  FaShieldAlt
} from 'react-icons/fa';

const DetailedGuidelinesPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Comprehensive E-Waste Management Guidelines</h1>
        <p className={styles.subtitle}>
          A complete guide to responsible electronic waste handling and disposal
        </p>
      </header>

      <section className={styles.section}>
        <h2><FaLeaf className={styles.icon} /> What Qualifies as E-Waste?</h2>
        <div className={styles.content}>
          <div className={styles.categoryGrid}>
            <div className={styles.category}>
              <h3>Computing Devices</h3>
              <ul>
                <li>Desktop computers and monitors</li>
                <li>Laptops and tablets</li>
                <li>Keyboards and mice</li>
                <li>Printers and scanners</li>
                <li>External drives and storage devices</li>
              </ul>
            </div>
            <div className={styles.category}>
              <h3>Mobile Devices</h3>
              <ul>
                <li>Smartphones</li>
                <li>Mobile phones</li>
                <li>Smart watches</li>
                <li>Tablets</li>
                <li>GPS devices</li>
              </ul>
            </div>
            <div className={styles.category}>
              <h3>Home Electronics</h3>
              <ul>
                <li>Television sets</li>
                <li>DVD/Blu-ray players</li>
                <li>Gaming consoles</li>
                <li>Audio equipment</li>
                <li>Digital cameras</li>
              </ul>
            </div>
            <div className={styles.category}>
              <h3>Household Appliances</h3>
              <ul>
                <li>Microwave ovens</li>
                <li>Electronic cookers</li>
                <li>Washing machines</li>
                <li>Refrigerators</li>
                <li>Air conditioners</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2><FaExclamationTriangle className={styles.icon} /> Hazardous Components</h2>
        <div className={styles.content}>
          <div className={styles.hazardousGrid}>
            <div className={styles.hazardousItem}>
              <h3>Lead</h3>
              <p>Found in: CRT screens, batteries, circuit boards</p>
              <p>Risks: Nervous system damage, kidney problems</p>
            </div>
            <div className={styles.hazardousItem}>
              <h3>Mercury</h3>
              <p>Found in: Fluorescent lamps, flat screens, switches</p>
              <p>Risks: Brain and nervous system damage</p>
            </div>
            <div className={styles.hazardousItem}>
              <h3>Cadmium</h3>
              <p>Found in: Circuit boards, batteries, semiconductors</p>
              <p>Risks: Kidney damage, bone problems</p>
            </div>
            <div className={styles.hazardousItem}>
              <h3>Brominated Flame Retardants</h3>
              <p>Found in: Plastic casings, cables</p>
              <p>Risks: Hormonal disruption, environmental persistence</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2><FaTools className={styles.icon} /> Proper Handling Procedures</h2>
        <div className={styles.content}>
          <div className={styles.proceduresList}>
            <div className={styles.procedure}>
              <h3>1. Collection and Storage</h3>
              <ul>
                <li>Store in dry, covered area</li>
                <li>Keep away from direct sunlight</li>
                <li>Avoid stacking heavy items</li>
                <li>Use sturdy containers</li>
                <li>Label containers clearly</li>
              </ul>
            </div>
            <div className={styles.procedure}>
              <h3>2. Sorting and Categorization</h3>
              <ul>
                <li>Separate by device type</li>
                <li>Isolate damaged items</li>
                <li>Group batteries separately</li>
                <li>Identify hazardous components</li>
                <li>Document inventory</li>
              </ul>
            </div>
            <div className={styles.procedure}>
              <h3>3. Pre-disposal Preparation</h3>
              <ul>
                <li>Remove batteries</li>
                <li>Secure loose components</li>
                <li>Package fragile items</li>
                <li>Remove external casings if required</li>
                <li>Separate recyclable materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2><FaShieldAlt className={styles.icon} /> Data Security Guidelines</h2>
        <div className={styles.content}>
          <div className={styles.securitySteps}>
            <div className={styles.step}>
              <h3>Data Removal Steps</h3>
              <ol>
                <li>Back up important data</li>
                <li>Use certified data wiping software</li>
                <li>Perform factory reset</li>
                <li>Remove storage devices when possible</li>
                <li>Verify data removal</li>
              </ol>
            </div>
            <div className={styles.securityInfo}>
              <h3>Important Security Considerations</h3>
              <ul>
                <li>Use Department of Defense (DoD) standard wiping methods</li>
                <li>Consider physical destruction for highly sensitive data</li>
                <li>Document the data destruction process</li>
                <li>Obtain certificates of destruction when available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2><FaCheckCircle className={styles.icon} /> Best Practices</h2>
        <div className={styles.content}>
          <div className={styles.bestPractices}>
            <div className={styles.dosList}>
              <h3>Do's</h3>
              <ul>
                <li>Research local recycling facilities</li>
                <li>Keep records of disposed items</li>
                <li>Use protective gear when handling</li>
                <li>Follow manufacturer guidelines</li>
                <li>Educate others about proper disposal</li>
                <li>Support certified recycling programs</li>
              </ul>
            </div>
            <div className={styles.dontsList}>
              <h3>Don'ts</h3>
              <ul>
                <li>Don't dispose with regular trash</li>
                <li>Don't break or crush components</li>
                <li>Don't expose to extreme temperatures</li>
                <li>Don't ignore warning labels</li>
                <li>Don't mix with non-electronic waste</li>
                <li>Don't attempt unauthorized repairs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2><FaRecycle className={styles.icon} /> Environmental Impact</h2>
        <div className={`${styles.content} ${styles.environmental}`}>
          <h3>Benefits of Proper E-Waste Recycling</h3>
          <ul>
            <li>Conservation of natural resources</li>
            <li>Reduction of greenhouse gas emissions</li>
            <li>Prevention of toxic materials entering landfills</li>
            <li>Recovery of valuable materials</li>
            <li>Protection of ecosystem and wildlife</li>
          </ul>
          
          <h3>Resource Recovery Potential</h3>
          <ul>
            <li>Precious metals (gold, silver, platinum)</li>
            <li>Base metals (copper, aluminum, iron)</li>
            <li>Rare earth elements</li>
            <li>Recyclable plastics</li>
            <li>Glass and ceramic materials</li>
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.disclaimer}>
          <FaExclamationTriangle className={styles.icon} />
          <p>
            These guidelines are for general information purposes. Always consult local regulations
            and certified recycling facilities for specific requirements in your area.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DetailedGuidelinesPage;