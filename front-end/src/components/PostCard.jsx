import React from "react";

export const PostCard = () => {
  return (
    <div className="page-content pt-6 h-full">
      <div className="container mx-auto flex px-1 h-full">
        <div className="w-11/12">
          <div className="feeds">
            <div className="feed-wrapper mb-4">
              <div className="feed-item border border-gray-400 rounded bg-white">
                <div className="header border-b p-4 flex justify-between items-center">
                  <div className="left flex flex-row items-center">
                    <div
                      class={`rounded-full p-[1.5px] mr-4 ${
                        true
                          ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                          : ""
                      }`}
                    >
                      <div class="rounded-full bg-white wrapper overflow-hidden p-[1.5px] flex justify-center items-center">
                        <div class="rounded-full bg-white wrapper overflow-hidden h-10 w-10">
                          <img
                            alt="nike's profile picture "
                            className="_6q-tv h-full object-cover bg-black"
                            data-testid="user-avatar"
                            draggable="false"
                            src="/images/kitten-510651.webp"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="user-name-and-place flex flex-col">
                      <span className="text-sm font-bold">apple</span>
                      <span className="text-xs font-light text-gray-900">
                        Chiapas, Mexico
                      </span>
                    </div>
                  </div>
                  <div className="right">
                    <svg
                      aria-label="More options"
                      className="_8-yf5 "
                      fill="#262626"
                      height={16}
                      viewBox="0 0 48 48"
                      width={16}
                    >
                      <circle
                        clipRule="evenodd"
                        cx={8}
                        cy={24}
                        fillRule="evenodd"
                        r="4.5"
                      />
                      <circle
                        clipRule="evenodd"
                        cx={24}
                        cy={24}
                        fillRule="evenodd"
                        r="4.5"
                      />
                      <circle
                        clipRule="evenodd"
                        cx={40}
                        cy={24}
                        fillRule="evenodd"
                        r="4.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="feed-img">
                  <img
                    src="https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                    alt=""
                  />
                </div>
                <div className="card-footer p-4 pt-0">
                  <div className="top">
                    <div className="my-2 w-full flex flex-row justify-around">
                      <span className="text-sm">#걷기 54%</span>
                      <span className="text-sm">#팔 휘두르기 21%</span>
                      <span className="text-sm">#앉기 6%</span>
                    </div>
                    <div className="icons flex flex-row justify-center items-center">
                      <div className="recommend mr-4">
                        <img
                          src="/images/recommend.png"
                          className="_8-yf5"
                          height={30}
                          width={30}
                        />
                        <div className="text-center p-1">0</div>
                      </div>
                      <div className="like mr-4">
                        <img
                          src="/images/like.png"
                          className="_8-yf5"
                          height={30}
                          width={30}
                        />
                        <div className="text-center p-1">0</div>
                      </div>
                      <div className="impressed mr-4">
                        <img
                          src="/images/impressed.png"
                          className="_8-yf5"
                          height={30}
                          width={30}
                        />
                        <div className="text-center p-1">2</div>
                      </div>
                      <div className="sad mr-4">
                        <img
                          src="/images/sad.png"
                          className="_8-yf5"
                          height={30}
                          width={30}
                        />
                        <div className="text-center p-1">0</div>
                      </div>
                      <div className="sad">
                        <img
                          src="/images/sad.png"
                          className="_8-yf5"
                          height={30}
                          width={30}
                        />
                        <div className="text-center p-1">0</div>
                      </div>
                    </div>

                    <div className="caption text-sm">
                      <b>apple </b>
                      new Iphone release ✨
                    </div>
                    <div className="post-date mt-1">
                      <span className="text-xs text-gray-900">
                        1 minute ago
                      </span>
                    </div>
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
