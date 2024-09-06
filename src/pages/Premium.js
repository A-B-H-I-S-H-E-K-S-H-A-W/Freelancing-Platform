import { CheckIcon } from '@heroicons/react/20/solid'
import Header from '../components/Header'
import Footer from '../components/Footer'

const includedFeatures = [
  'Unlock Premium Features',
  "Get Primium Verified",
  "Maximize your Job Oppertunities",
  "Attract more Clients",
  "Unlock MNC's Contract based Jobs",
  "Elevate Profile Visibility",
]

export default function Premium() {
  return (
    <>

    <Header/>
    <div className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get Premium Membership Now</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum.
          </p>
        </div>
          
        <div className='grid grid-cols-1 md:grid-cols-[30%,70%] '>
            <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 mt-2 lg:mx-0 lg:flex lg:max-w-none">
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Share & Get Benefits</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">Free</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600"></span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Redeem Now
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Get upto 500 Credit Score. 
                    Straight to your account
                  </p>
                </div>
              </div>
              </div>
            </div>
            <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 mt-2 lg:mx-0 lg:flex lg:max-w-none">
              
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">₹ 499</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">INR</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
            </div>
            <div className="p-8 sm:p-10 lg:flex-auto">
            <ul
              role="list"
              className="mt-4 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
              </div>
            </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}

