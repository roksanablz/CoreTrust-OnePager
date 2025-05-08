import React, { forwardRef } from 'react';

const CoreTrustOnePager = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className="flex flex-col h-full bg-white text-black font-sans">
    {/* Header with logo and tagline */}
    <div className="bg-gradient-to-r from-red-900 to-red-700 p-6 px-2 md:px-7 lg:px-20 flex items-center shadow-md">
      <div className="flex-1">
        <div className="text-5xl font-bold text-white mb-2 drop-shadow-sm print-header-title">CoreTrust</div>
        <div className="text-2xl text-white">by TectoAI</div>
        <div className="text-gray-200 mt-2 text-xl italic">A platform for AI governance and compliance</div>
      </div>
      <div className="mr-4">
        <div className="bg-white bg-opacity-80 p-4 rounded-full shadow-lg border-4 border-red-800 flex items-center justify-center logo-circle-bg">
          <img src={require('../assets/ai-logo.png')} alt="AI Logo" className="w-32 h-32 object-contain drop-shadow-lg" />
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="p-6 px-2 md:px-7 lg:px-20 flex-1 bg-gradient-to-b from-white to-gray-50">

      {/* Overview Section with visual elements */}
      <div className="mb-8 bg-white rounded-lg shadow-md p-5 border-l-4 border-red-800">
        <div className="flex items-center mb-3">
          <div className="bg-red-800 h-8 w-8 rounded-full flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-xl font-bold text-red-800">Overview</div>
        </div>
        <div className="text-base leading-relaxed pl-11">
          CoreTrust is an AI governance platform built to ensure trust, transparency, and compliance in enterprise AI adoption. As AI tools flood the market, regulated organizations face growing risks—from legal liability to reputational damage—when adopting third-party AI. 
          <p className="mt-2 font-semibold text-blue-600">CoreTrust solves this by providing the governance layer companies need to discover, evaluate, and monitor responsibly. Like HR for AI agents.</p>
        </div>
      </div>

      {/* Two-column layout for Problem and Solution with improved design */}
      <div className="flex flex-col gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-red-800 text-white py-3 px-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-xl font-bold">Problem</span>
          </div>
          <div className="p-4">
            <div className="text-base">
              Enterprises struggle to safely adopt AI due to:
              <ul className="mt-3 space-y-3">
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Lack of visibility into the risks and compliance status of third-party AI tools</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Rapidly changing regulatory landscape (e.g., EU AI Act, Executive Order 14110, NIST RMF)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Growing internal pressure from legal, compliance, and procurement teams</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Difficulty aligning technical audits with policy standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white py-3 px-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xl font-bold">Solution</span>
          </div>
          <div className="p-4">
            <div className="text-base">
              CoreTrust provides a unified AI governance platform with:
              <ul className="mt-3 space-y-3">
                <li className="flex">
                  <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-blue-600">Responsible AI Evaluation</span>
                    <p className="text-sm text-gray-600">Evaluate external AI tools across trust, safety, fairness, and compliance metrics</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-blue-600">PolicySense</span>
                    <p className="text-sm text-gray-600">A real-time AI policy tracker that monitors global regulations and highlights what matters to your business</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-blue-600">Discover AI Tools</span>
                    <p className="text-sm text-gray-600">A centralized library of AI tools and agents for different use cases to bring efficiency to organizations.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-blue-600">Integration Tiers</span>
                    <p className="text-sm text-gray-600">From light-touch evaluations to full runtime monitoring, tailored to your level of risk and integration</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Side-by-side vertical blocks for Why Now and Who It's For */}
      <div className="flex flex-row gap-8 mb-8 items-stretch min-h-0">
        {/* Why Now - Vertical Block */}
        <div className="flex-1 flex flex-col h-full">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 flex flex-col h-full">
            <div className="bg-red-800 text-white py-3 px-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xl font-bold">Why Now</span>
            </div>
            <div className="p-4 bg-gradient-to-b from-red-50 to-red-100 flex-1 flex flex-col h-full">
              <ul className="space-y-2">
                <li className="bg-white rounded-lg p-2 shadow-inner">
                  <div className="text-red-800">
                    <span className="font-bold text-lg">800+</span> AI models
                  </div>
                </li>
                <li className="bg-white rounded-lg p-2 shadow-inner">
                  <div className="text-red-800">
                    <span className="font-bold text-lg">100+</span> LLMs
                  </div>
                </li>
                <li className="bg-white rounded-lg p-2 shadow-inner">
                  <div className="text-red-800">
                    <span className="font-bold text-lg">30K+</span> AI tools & applications
                  </div>
                </li>
                <li className="bg-white rounded-lg p-2 shadow-inner">
                  <div className="text-red-800">
                    <span className="font-bold text-lg">28%</span> Workers use Gen AI apps
                  </div>
                </li>
                <li className="bg-white rounded-lg p-2 shadow-inner">
                  <div className="text-red-800">
                    <span className="font-bold text-lg">50%+</span> Workers that use GenAI don't have approvals
                  </div>
                </li>
                <li className="bg-white rounded-lg p-2 shadow-inner">
                  <div className="text-red-800">
                    <span className="font-bold text-lg">$500B</span> Productivity loss due to banning AI tools
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Who It's For - Vertical Block */}
        <div className="flex-1 flex flex-col h-full">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 flex flex-col h-full">
            <div className="bg-blue-600 text-white py-3 px-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-xl font-bold">Who It's For</span>
            </div>
            <div className="p-4 bg-gradient-to-b from-blue-50 to-blue-100 flex-1 flex flex-col h-full">
              <div className="space-y-2">
                <div className="bg-white p-3 rounded-lg shadow-inner">
                  <h4 className="font-bold text-blue-600">Leadership Roles</h4>
                  <p className="text-sm">CTOs, CIOs, CISOs, CRM, MRM, Compliance Officers, Heads of Procurement</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-inner">
                  <h4 className="font-bold text-blue-600">Industries</h4>
                  <p className="text-sm">Finance, healthcare, defense, and other high-stakes regulated sectors</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-inner">
                  <h4 className="font-bold text-blue-600">AI Platforms</h4>
                  <p className="text-sm">Companies seeking to demonstrate their AI solutions are "safe to adopt"</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-inner">
                  <h4 className="font-bold text-blue-600">AI Adoption Teams</h4>
                  <p className="text-sm">Enterprise teams looking to safely implement AI solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual Callout Box */}
      <div className="mt-6 bg-gradient-to-r from-red-800 to-red-700 p-1 rounded-lg shadow-lg">
        <div className="bg-white p-6 rounded-lg">
          <div className="text-center mb-4">
            <span className="bg-red-800 text-white text-lg font-bold px-4 py-2 rounded-full">CoreTrust Platform Benefits</span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-600 p-2 rounded-full mr-3 text-white flex items-center justify-center h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-red-800">Enhanced Compliance</h3>
                <p className="text-sm">Streamlined adherence to AI regulations with automated monitoring</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 p-2 rounded-full mr-3 text-white flex items-center justify-center h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-red-800">Accelerated Adoption</h3>
                <p className="text-sm">60% faster AI implementation with pre-vetted applications</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 p-2 rounded-full mr-3 text-white flex items-center justify-center h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-red-800">Risk Reduction</h3>
                <p className="text-sm">Minimize liability with continuous monitoring and alerts</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 p-2 rounded-full mr-3 text-white flex items-center justify-center h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-red-800">Transparent Governance</h3>
                <p className="text-sm">Complete visibility into AI tools with executive-ready reporting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="bg-gradient-to-r from-red-900 to-red-700 p-6 px-2 md:px-7 lg:px-20 text-white shadow-inner print-footer-padding">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 footer-flex-row">
        <div className="flex items-center">
          <div className="mr-4">
            <svg width="50" height="50" viewBox="0 0 240 240" className="text-white">
              <g fill="currentColor">
                <path d="M120,20 C160,20 190,50 190,100 C190,150 160,180 120,180 C80,180 50,150 50,100 C50,50 80,20 120,20 Z M120,40 C90,40 70,60 70,100 C70,140 90,160 120,160 C150,160 170,140 170,100 C170,60 150,40 120,40 Z" fillOpacity="0.3" />
                <path d="M120,60 L120,140 M80,100 L160,100 M90,70 C120,100 120,100 150,70 M90,130 C120,100 120,100 150,130" strokeWidth="10" fill="none" stroke="currentColor" />
              </g>
            </svg>
          </div>
          <div>
            <div className="text-2xl font-bold">TectoAI</div>
            <div className="text-sm italic">Maintaining human superagency over the tectonic shift in technology</div>
          </div>
        </div>
        <div className="flex items-center">
          <a href="https://www.tecto.ai" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all py-2 px-4 rounded-full text-white font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            www.tecto.ai
          </a>
        </div>
      </div>
    </div>
  </div>
));

export default CoreTrustOnePager; 