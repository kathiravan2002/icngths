import { Helmet } from "react-helmet";

const HelmetComponent = ({ title,canonical }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="ICNGTHS, International Conference on Next-Gen Technologies in Healthcare and Security  ,Next-Gen Technologies, Healthcare Technology, Cybersecurity, Medical Innovation, HealthTech, Digital Health, Healthcare Security, Artificial Intelligence in Healthcare, Blockchain in Healthcare, IoT in Healthcare, Data Security, Health Informatics, International Conference 2025, Medical Data Analytics, Smart Healthcare Systems, Biometric Security, Emerging Technologies, Health IT, Cyber Threats, Medical Device Security" />
            <meta name="description" content="The International Conference on Next-Gen Technologies in Healthcare and Security brings together global experts to explore innovations in digital health, cybersecurity, AI, and secure medical systems. Join us in 2025 to shape the future of healthcare and security." />
            <meta name="author" content="ICNGTHS Editorial Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Next-Gen Technologies in Healthcare and Security" />
            <meta property="og:description" content="The International Conference on Next-Gen Technologies in Healthcare and Security brings together global experts to explore innovations in digital health, cybersecurity, AI, and secure medical systems. Join us in 2025 to shape the future of healthcare and security." />
            <meta property="og:url" content="https://icngths.com/" />
            <meta property="og:image" content="https://icngths.com/images/ICNGTHS.png" />

            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://icngths.com/images/ICNGTHS.png" />

        </Helmet>
    );
};

export default HelmetComponent;         