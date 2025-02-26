import React, {useState} from "react"

import "./index.css"

import { GrTechnology } from "react-icons/gr";
import { GiTechnoHeart } from "react-icons/gi";
import { SiTechcrunch } from "react-icons/si";
import { AiFillBug } from "react-icons/ai";
import { BsSignRailroadFill } from "react-icons/bs";
import { RiBarChartBoxAiFill } from "react-icons/ri";
import { RiOpenaiFill } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaHeadset } from "react-icons/fa";
import { MdOutlineLiveHelp } from "react-icons/md"

const Home = () => {
    const tabs = ["AI Powered Solutions", "Scalable Cloud", "Power Cloud", "Kubernetes", "Load Balancer"]
    const [activeTab, setActiveTab] = useState(0)

    const aiPoweredSolutionsComponent = () => {
        return (
            <div className="each-tab-info-container">
                <ul className="tab-top-section">
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Smart Task Automation <span>Pro Feature</span></h2>
                            <p>
                                Effortlessly handles repetitive tasks, boosting efficiency and
                                saving valuable time.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Data-Driven Insights</h2>
                            <p>
                                Delivers real-time analytics and recommendations toenhance decision making.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Custom Adaptability</h2>
                            <p>
                                Easily integrates with your work flow, adapting to your unique business needs.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Conversational Interaction <span>Pro Feature</span></h2>
                            <p>
                                Communicate naturally with AI using voice or text for seamless task execution.
                            </p>
                        </div>
                    </li>
                </ul>
                <div className="tab-bottom-section">
                    <div className="tab-bottom-text">
                        <h3>
                            AI Solutions for Next-level Growth
                        </h3>
                    </div>
                    <div className="tab-bottom-image-container">
                        <img src="https://www.futureelectronics.com/medias/sys_master/images/images/9491569115166/OurSolutionsAI.jpg" alt="tab-image" className="tab-bottom-image" />
                    </div>
                </div>
            </div>
        )
    }

    const scalableCloudComponent = () => {
        return (
            <div className="each-tab-info-container">
                <ul className="tab-top-section">
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Build-Your-Own Plan <span>Pro Feature</span></h2>
                            <p>
                                Customize CPU, memory, and storage to create a VPS tailoredto your exact needs.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Optimized Performance</h2>
                            <p>
                                Fine-tune your VPS configuration to ensure maximum efficiency for your specific applications.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>On-demand Scalability</h2>
                            <p>
                                Easily scale resources up or down as your business grows or needs change.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Seamless Integraton <span>Pro Feature</span></h2>
                            <p>
                                Customize the server to fit perfectly into your existing infrastructure and workflow.
                            </p>
                        </div>
                    </li>
                </ul>
                <div className="tab-bottom-section">
                    <div className="tab-bottom-text">
                        <h3>
                            Harness the Power Of Scalable Technology
                        </h3>
                    </div>
                    <div className="tab-bottom-image-container">
                        <img src="https://media.istockphoto.com/id/831139564/photo/technology-and-media-concept.jpg?s=612x612&w=0&k=20&c=W7zFQmFQtgVk5k0iTQSTati6KXS4wzlZ87ZsvVlna-g=" alt="tab-image" className="tab-bottom-image" />
                    </div>
                </div>
            </div>
        )
    }

    const powerCloudComponent = () => {
        return (
            <div className="each-tab-info-container">
                <ul className="tab-top-section">
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Advance Management Tools <span>Pro Feature</span></h2>
                            <p>
                                Moniter, manage, and optimize your cloud environmentwith intuitive dashboards and automation capabilities.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Faster Deployment</h2>
                            <p>
                                Accelerate application and system launches with ready-to-use integrations and reduced setup complexity.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Cost Efficiency</h2>
                            <p>
                                Reduce operatonal costs by optimizing resource utilization through integrated tools and workflows.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Better Decision-Making</h2>
                            <p>
                                Integrations provide real-time data access and analytics, empowering business with actionable insights.
                            </p>
                        </div>
                    </li>
                </ul>
                <div className="tab-bottom-section">
                    <div className="tab-bottom-text">
                        <h3>
                            Cloud Power for Maximum Performance
                        </h3>
                    </div>
                    <div className="tab-bottom-image-container">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/051/092/806/small_2x/a-futuristic-cloud-computing-concept-showcasing-digital-data-and-technology-in-a-vibrant-high-tech-environment-free-video.jpg" alt="tab-image" className="tab-bottom-image" />
                    </div>
                </div>
            </div>
        )
    }

    const kubernetesComponent = () => {
        return (
            <div className="each-tab-info-container">
                <ul className="tab-top-section">
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Improved Security & Compliance <span>Pro Feature</span></h2>
                            <p>
                                Kubernets enables robust security practices, including role-based access control (RBAC),
                                network policies, and secures secret management to protect your apps and data.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Stream-lined Management</h2>
                            <p>
                                Simplify complex application management by automating tasks like deployment, scaling,
                                and monitoring, allowing teams to focus on innovation.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>High Availability & Reliability</h2>
                            <p>
                                Keep your applications running smoothly with Kubernets self-healing capabilities,
                                automatic failovers, and multi-region redundancy.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Better Decision-Making</h2>
                            <p>
                                Integrations provide real-time data access and analytics, empowering business with actionable insights.
                            </p>
                        </div>
                    </li>
                </ul>
                <div className="tab-bottom-section">
                    <div className="tab-bottom-text">
                        <h3>
                            Kubernetes Solutions for Modern infrastructure
                        </h3>
                    </div>
                    <div className="tab-bottom-image-container">
                        <img src="https://cms.lamzing.com/uploads/kubernetes768x422_82b86241b3.png" alt="tab-image" className="tab-bottom-image" />
                    </div>
                </div>
            </div>
        )
    }

    const loadBalancerComponent = () => {
        return (
            <div className="each-tab-info-container">
                <ul className="tab-top-section">
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Seamless Traffic Distribution <span>Pro Feature</span></h2>
                            <p>
                                Effortlessly distribute traffic across multiple servers, ensuring high-performance
                                and fast response times for users, no matter the load.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Effortless Integration with Cloud & On-Premise Environments</h2>
                            <p>
                                Whether hosted in the cloud or on-premise, our load balancer integrates seamlessly,
                                providing reliable performance for your entire infrastructure setup.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Automatic Failover and Availability</h2>
                            <p>
                                Maintain continuous service uptime with automatic failover. if one server goes down the load balancer
                                instantly redirects traffic to healthy servers, preventing downtime.
                            </p>
                        </div>
                    </li>
                    <li className="each-tab">
                        <IoMdCheckboxOutline size={50}/>
                        <div className="each-tab-info">
                            <h2>Customizable Load Balancing Algorithms</h2>
                            <p>
                                Customize traffic distribution using algorithms like round-robin,
                                least-connections or weighted balancing to meet your applications need.
                            </p>
                        </div>
                    </li>
                </ul>
                <div className="tab-bottom-section">
                    <div className="tab-bottom-text">
                        <h3>
                            Smart Load Balancing for High Performance Websites
                        </h3>
                    </div>
                    <div className="tab-bottom-image-container">
                        <img src="https://middleware.io/wp-content/uploads/2021/08/Cloud-Load-Balancing-2.jpg" alt="tab-image" className="tab-bottom-image" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="home-section">
            <div className="home-intro-section">
                <div className="home-intro-text-section">
                    <p className="home-intro-text-description">
                        Secure. Scalable. Always Reliable
                    </p>
                    <h1 className="home-intro-text-heading">
                        Empower your growth with lightning-fast, secure, and customizationcloud technology
                    </h1>
                    <p className="home-intro-text-description-one">
                        Take control of your cloud. Deploy fast, scale instantly, and pay as you go.
                        Enjoy top performance, strong security, 24/7 reliability
                    </p>
                    <div className="home-intro-frame">
                        <div className="frame-icon-container"><GrTechnology /></div>
                        <div className="frame-icon-container"><GiTechnoHeart /></div>
                        <div className="frame-icon-container"><SiTechcrunch /></div>
                        <div className="frame-icon-container"><AiFillBug /></div>
                        <div className="frame-icon-container"><BsSignRailroadFill /></div>
                        <div className="frame-icon-container"><RiBarChartBoxAiFill /></div>
                        <div className="frame-icon-container"><RiOpenaiFill /></div>
                    </div>
                    <button className="home-intro-explore-button">
                        <p>Explore All Solution</p>
                        <FaLongArrowAltRight />
                    </button>
                    <hr className="hr-line" />
                </div>
                <div className="home-intro-bottom-section">
                    <div className="home-intro-bottom-text-section">
                        <p className="home-intro-bottom-header-description">
                            From <strong>Start To Scale</strong>, Cloud Solutions for Every Stage of Your Journey
                        </p>
                        <p className="home-intro-bottom-text-description">
                            Save time and cut costs with high-quality cloud services. Enjoy
                            seamless scaling, strong security, and easy development to keep 
                            your business growing. 
                        </p>
                    </div>
                    <div className="home-intro-bottom-stats-container">
                        <div className="home-intro-stats-one">
                            <h1 className="home-intro-stats-head">99.9%</h1>
                            <p className="home-intro-stats-des">Up-Time Gaurantee</p>
                        </div>
                        <div className="home-intro-stats-two">
                            <h1 className="home-intro-stats-head">100%</h1>
                            <p className="home-intro-stats-des">High-Level Security</p>
                        </div>
                        <div className="home-intro-stats-three">
                            <h1 className="home-intro-stats-head">24/7</h1>
                            <p className="home-intro-stats-des">Expert Support</p>
                        </div>
                        <div className="home-intro-stats-four">
                            <h1 className="home-intro-stats-head">100%</h1>
                            <p className="home-intro-stats-des">Customization</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-main-content-section">
                <div className="home-tabs-info-container">
                    <h1 className="home-tabs-info-heading">
                        Tech-Powered Solutions Features for Ultimate Efficiency
                    </h1>
                    <p className="home-tabs-info-text">
                        Maximize your business with scalable, secure and high performancecloud solutions.
                    </p>
                    <ul className="tabs-list-container">
                        {tabs.map((tab, index) => (
                            <li><button key={index} onClick={() => setActiveTab(index)}>{tab}</button></li>
                        ))}
                    </ul>
                    <div className="tab-info-container">
                        {activeTab === 0 && aiPoweredSolutionsComponent()}
                        {activeTab === 1 && scalableCloudComponent()}
                        {activeTab === 2 && powerCloudComponent()}
                        {activeTab === 3 && kubernetesComponent()}
                        {activeTab === 4 && loadBalancerComponent()}
                    </div>
                </div>
                <div className="cloud-solution-container-one">
                    <h1>
                        Cloud Solutions Perfectly Aligned with Your Needs
                    </h1>
                    <p>
                        Maximize your business potential with our powerful cloud offerings.
                        Scalable, secure, and performance-driven solutions designed to adapt and grow with your needs
                    </p>
                    <ul className="solutions-container">
                        <li className="solution-item">
                            <img src="https://cdn.mos.cms.futurecdn.net/ucvfATRWvjfruza2xbFAtf-1024-75.jpg" alt="solution-image" />
                            <h3>Scalable Cloud Server</h3>
                            <p>
                                Customize your cloud with CPU, RAM, storage, and more to match your system requirements. 
                            </p>
                            <ul className="solution-item-features-container">
                                <li>Scalability</li>
                                <li>Optimization</li>
                            </ul>
                            <button>Discover more</button>
                        </li>
                        <li className="solution-item">
                            <img src="https://yotta.com/wp-content/uploads/2025/01/comparing-ibm-p-series-to-competitors.jpg" alt="solution-image" />
                            <h3>Power Cloud</h3>
                            <p>
                                Elevate your business with blazing-fast, scalable, and secure cloud infrastructure designed for growth. 
                            </p>
                            <ul className="solution-item-features-container">
                                <li>Up gradable</li>
                                <li>Scalable</li>
                                <li>Instant Deployment</li>
                            </ul>
                            <button>Discover more</button>
                        </li>
                        <li className="solution-item">
                            <img src="https://eu-images.contentstack.com/v3/assets/blt8eb3cdfc1fce5194/bltbc48ed26fc52a2e6/662113d63a23d006cfb09914/server-room-1_0.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale" alt="solution-image" />
                            <h3>Bare Metal</h3>
                            <p>
                                Enjoy full control and maximum performance with dedicated servers built for your business. 
                            </p>
                            <ul className="solution-item-features-container">
                                <li>Full Control</li>
                                <li>Dedicated Resources</li>
                            </ul>
                            <button>Discover more</button>
                        </li>
                        <li className="solution-item">
                            <img src="https://i.pinimg.com/736x/68/1d/65/681d6567fb8747f58679a14f75fe4b05.jpg" alt="solution-image" />
                            <h3>S3 Object Storage</h3>
                            <p>
                                Store and manage vast amounts of daat with ease, scalability, and top-tier security. 
                            </p>
                            <ul className="solution-item-features-container">
                                <li>Durability</li>
                                <li>Cost Effective</li>
                                <li>Easy Access</li>
                            </ul>
                            <button>Discover more</button>
                        </li>
                        <li className="solution-item">
                            <img src="https://yotta.com/wp-content/uploads/2023/08/what-is-load-balancing-how-do-load-balancers-work.jpg" alt="solution-image" />
                            <h3>Load Balancer</h3>
                            <p>
                                Distribute traffic efficiently for better speed and reliability. 
                            </p>
                            <ul className="solution-item-features-container">
                                <li>Performance Optimization</li>
                                <li>Traffic Distribution</li>
                            </ul>
                            <button>Discover more</button>
                        </li>
                        <li className="solution-item">
                            <img src="https://blog.tiinfotech.com/wp-content/uploads/2023/01/Top-5-Traits-of-Highly-Successful-Server-Management-Services.jpg" alt="solution-image" />
                            <h3>Managed Server</h3>
                            <p>
                                Leave the management to us and enjoy high-performance servers, fully optimized and supported. 
                            </p>
                            <ul className="solution-item-features-container">
                                <li>24/7</li>
                                <li>Security Management</li>
                            </ul>
                            <button>Discover more</button>
                        </li>
                    </ul>
                </div>
                <div className="home-faqs-container">
                    <details>
                        <summary>What makes an SSCloud different from other cloud providers?</summary>
                        <p>
                            SSCloud prioritizes user sovereignty, meaning users fully own and control their data, identity, 
                            and digital assets without relying on a centralized authority.
                        </p>
                    </details>
                    <details>
                        <summary>How do I get started with SSCloud?</summary>
                        <p>
                            Choose a Self-Sovereign Cloud platform like NextCloud, Storj, or Sia, or set up your own decentralized cloud using IPFS or blockchain-based storage.
                        </p>
                    </details>
                    <details>
                        <summary>Is SSCloud's infrastructure secure?</summary>
                        <p>
                            SSCloud prioritizes user sovereignty, meaning users fully own and control their data, identity, 
                            and digital assets without relying on a centralized authority.
                        </p>
                    </details>
                    <details>
                        <summary>Can I scale my resources as my business grows?</summary>
                        <p>
                            SSCloud prioritizes user sovereignty, meaning users fully own and control their data, identity, 
                            and digital assets without relying on a centralized authority.
                        </p>
                    </details>
                    <details>
                        <summary>What type of cloud services do you offer?</summary>
                        <p>
                            SSCloud prioritizes user sovereignty, meaning users fully own and control their data, identity, 
                            and digital assets without relying on a centralized authority.
                        </p>
                    </details>
                    <details>
                        <summary>What is your pricing model?</summary>
                        <p>
                            SSCloud prioritizes user sovereignty, meaning users fully own and control their data, identity, 
                            and digital assets without relying on a centralized authority.
                        </p>
                    </details>
                </div>
                <div className="home-support-container">
                    <h3>AI-Powered Help</h3>
                    <p>
                        We're here to assist you! Reach out for any questions or support
                    </p>
                    <div className="home-support-items-container">
                        <div className="home-support-item">
                            <FaHeadset size={65}/>
                            <h4>AI Chat</h4>
                            <p>
                                Use our AI Chat for quick solution, personalized advice, and instant support
                            </p>
                            <button>Talk to Our AI Expert</button>
                        </div>
                        <div className="home-support-item">
                            <MdOutlineLiveHelp size={65}/>
                            <h4>Get Quote</h4>
                            <p>
                                Share your requirements, and recieve a personalized quote that fits your goals and budget
                            </p>
                            <button>Let's Build Your Plan</button>
                        </div>
                    </div>
                </div>
                <div className="home-image-container">
                    <h1>"Where Innovation Meets Scalability"</h1>
                    <p>Secure cloud solutions for your business growth</p>
                </div>
            </div>
        </div>
    )
}
export default Home 