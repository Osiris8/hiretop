"use client";
import Image from "next/image";
import feature1 from "../public/images/feature/feature1.png";
export default function Feature2() {
  return (
    <section>
      <div class="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div class="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
          <div class="md:order-first">
            <h1 class="text-4xl font-semibold tracking-tighter text-gray-900 text-balance">
              Building one pagers together,
              <span class="text-gray-600">wherever and anywhere</span>
            </h1>
            <p class="mt-4 text-base font-medium text-gray-500">
              Control and added security. With decentralization, users have more
              control over their data and transactions, and the platform is less
              susceptible to malicious attacks.
            </p>

            <dl class="grid grid-cols-2 gap-4 mt-12 list-none lg:gap-6 text-pretty">
              <div>
                <div>❖</div>
                <dt class="mt-4 font-medium text-gray-900">
                  No warranty disclaimer
                </dt>
                <dd class="mt-2 text-sm text-gray-500">
                  The license comes with no warranties. The licensor provides
                  the work and users must use it at their own risk.
                </dd>
              </div>
              <div>
                <div>❖</div>
                <dt class="mt-4 font-medium text-gray-900">
                  Commercial use allowed
                </dt>
                <dd class="mt-2 text-sm text-gray-500">
                  You are allowed to use the licensed work for both
                  non-commercial and commercial purposes.
                </dd>
              </div>
            </dl>
          </div>
          <div class="order-first block w-full mt-12 aspect-square lg:mt-0">
            <div class="h-full p-2 overflow-hidden border shadow-lg bg-gray-50 rounded-3xl">
              <Image
                alt="#_"
                class="relative w-full rounded-2xl drop-shadow-2xl"
                src={feature1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
