"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Settings, Settings2, Shuffle } from "lucide-react";

interface ColorVisualizerProps {
  fill: string;
}

const getColorContrastMessage = (sortedColors: string[]): any => {
  switch (sortedColors.length) {
    case 3:
      return (
        <svg
          width="403"
          height="571"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="svg2"
          viewBox="0 0 500 670"
        >
          {sortedColors[0] && (
            <ellipse
              cx="134.513"
              cy="498.657"
              rx="48.681"
              ry="49.321"
              stroke="rgb(0, 0, 0)"
              fill={`#${sortedColors[0]}`}
              fillRule="nonzero"
            />
          )}

          {sortedColors[0] && (
            <ellipse
              cx="278.634"
              cy="339.164"
              rx="48.681"
              ry="49.321"
              stroke="rgb(0, 0, 0)"
              fill={`#${sortedColors[1]}`}
              fillRule="nonzero"
            />
          )}

          {sortedColors[0] && (
            <ellipse
              cx="126.827"
              cy="339.163"
              rx="48.681"
              ry="49.321"
              stroke="rgb(0, 0, 0)"
              fill={`#${sortedColors[2]}`}
              fillRule="nonzero"
            />
          )}
        </svg>
      );
    default:
      return "Default contrast message";
  }
};

const Frame5 = (sortedColors: string[]): any => {
  switch (sortedColors.length) {
    case 5:
      return (
        <svg
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-96 w-full`}
        >
          {sortedColors[0] && (
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 449.5V1080H107.917C6.3783 1024.66 226.536 1000.1 464.628 973.533C685.19 948.925 921.142 922.6 931 868.5C945.349 789.754 483.47 626.738 205.016 528.46C85.6566 486.333 0 456.101 0 449.5Z"
              fill={`#${sortedColors[4]}`}
            />
          )}
          {sortedColors[0] && (
            <path
              d="M107.917 1080H847.237C1176 1048 1840.2 1001.2 1863 896C1877 711.5 593 546 44.5 0.000843727H0L0 449.5C0 456.101 85.6566 486.333 205.016 528.46C483.47 626.738 945.349 789.754 931 868.5C921.142 922.6 685.19 948.925 464.628 973.533C226.536 1000.1 6.3783 1024.66 107.917 1080Z"
              fill={`#${sortedColors[3]}`}
            />
          )}
          {sortedColors[0] && (
            <path
              d="M1863 896C1840.2 1001.2 1176 1048 847.237 1080H1920V515.5C1615.17 415.167 1015.5 0.500576 757 0.500843C498.5 0.50111 44.5 0.000843727 44.5 0.000843727C593 546 1877 711.5 1863 896Z"
              fill={`#${sortedColors[2]}`}
            />
          )}
          {sortedColors[0] && (
            <path
              d="M757 0.500843C1015.5 0.500576 1615.17 415.167 1920 515.5V164.501C1803.33 109.501 1570.2 -0.398716 1571 0.00108787C1571.8 0.400892 1028.67 0.500843 757 0.500843Z"
              fill={`#${sortedColors[1]}`}
            />
          )}
          {sortedColors[0] && (
            <path
              d="M1571 0.00108787C1570.2 -0.398716 1803.33 109.501 1920 164.501V0.00109863L1571 0.00108787Z"
              fill={`#${sortedColors[0]}`}
            />
          )}
        </svg>
      );
    default:
      return "Default contrast message";
  }
};

const Visualizer: React.FC<ColorVisualizerProps> = ({ fill }) => {
  const colorList = fill.split(`-`);
  const [sortedColors, setSortedColors] = useState([...colorList]);

  const sortColors = () => {
    const newColors = [...sortedColors];
    for (let i = 0; i < newColors.length - 1; i++) {
      // Swap adjacent colors
      const temp = newColors[i];
      newColors[i] = newColors[i + 1];
      newColors[i + 1] = temp;
    }
    setSortedColors(newColors);
  };

  return (
    <div className="w-full">
      <div className={`flex justify-between items-center my-10`}>
        <h1 className={`text-4xl font-bold`}>Components</h1>
        <Button onClick={sortColors} variant={"default"} size={"default"}>
          <Shuffle absoluteStrokeWidth strokeWidth={1} size={24} />
        </Button>
      </div>
      <div>
        {/* {getColorContrastMessage(sortedColors)} */}
        {/* {Frame5(sortedColors)} */}
        <div className={`grid grid-cols-3 w-full gap-5 relative`}>
          <div
            style={{ backgroundColor: `#${sortedColors[0]}` }}
            className={`w-full rounded-3xl border`}
          >
            <div className={`flex justify-between p-3`}>
              <p>Available to payout</p>
              <ArrowUpRight
                absoluteStrokeWidth
                size={32}
                className={`rounded-full`}
                style={{ backgroundColor: `#${sortedColors[1]}` }}
              />
            </div>
            <p className={`text-5xl p-3`}>$152.10K</p>
            <div className={`flex justify-start p-3 text-xs`}>
              <p>Payout</p>
              <li>$6.1K will available soon</li>
            </div>
          </div>
          <div
            style={{ backgroundColor: `#${sortedColors[1]}` }}
            className={`w-full  rounded-3xl border`}
          >
            <div className={`flex justify-between p-3`}>
              <p>Today revenue</p>
              <ArrowUpRight
                absoluteStrokeWidth
                size={32}
                className={`rounded-full`}
                style={{ backgroundColor: `#${sortedColors[2]}` }}
              />
            </div>
            <p className={`text-5xl p-3`}>$6.4K</p>
            <div className={`flex justify-start p-3 text-xs`}>
              <p>Payout</p>
              <li>$6.1K will available soon</li>
            </div>
          </div>
          <div
            style={{ backgroundColor: `#${sortedColors[2]}` }}
            className={`w-full  rounded-3xl border`}
          >
            <div className={`flex justify-between p-3`}>
              <p>Today session</p>
              <ArrowUpRight
                absoluteStrokeWidth
                size={32}
                className={`rounded-full`}
                style={{ backgroundColor: `#${sortedColors[3]}` }}
              />
            </div>
            <p className={`text-5xl p-3`}>400</p>
            <div className={`flex justify-start p-3 text-xs`}>
              <p>Payout</p>
              <li>$6.1K will available soon</li>
            </div>
          </div>
        </div>
        <div className={`grid grid-cols-2 gap-5`}>
          <div className={`p-5 my-10 bg-stone-100 border rounded-xl`}>
            <div className={`flex justify-between items-center`}>
              <div className={`mb-1`}>
                <h1 className={`text-3xl font-medium mb-1`}>Sales Funnel</h1>
                <p>Total view per month</p>
              </div>
              <div className={`flex justify-center items-center gap-5`}>
                <h1
                  style={{ backgroundColor: `#${sortedColors[2]}` }}
                  className={`p-2 px-4 rounded-full`}
                >
                  Monthly
                </h1>
                <p
                  style={{ backgroundColor: `#${sortedColors[2]}` }}
                  className={`p-2 rounded-full`}
                >
                  <Settings2 absoluteStrokeWidth size={28} strokeWidth={1.2} />
                </p>
              </div>
            </div>
            <div className={`w-full flex justify-center items-end`}>
              <div className={`flex justify-center items-end gap-x-3`}>
                <div className={`text-center`}>
                  <div
                    style={{ backgroundColor: `#${sortedColors[0]}` }}
                    className={`w-16 h-32 rounded-3xl`}
                  ></div>
                  <p className={`mt-1`}>Mon</p>
                </div>
                <div className={`text-center`}>
                  <div
                    style={{ backgroundColor: `#${sortedColors[1]}` }}
                    className={`w-16 h-20 rounded-3xl`}
                  ></div>
                  <p className={`mt-1`}>Tue</p>
                </div>
                <div className={`text-center`}>
                  <div
                    style={{ backgroundColor: `#${sortedColors[2]}` }}
                    className={`w-16 h-32 rounded-3xl`}
                  ></div>
                  <p className={`mt-1`}>Wed</p>
                </div>
                <div className={`text-center`}>
                  <div className={`flex flex-col gap-y-1`}>
                    <div
                      style={{ backgroundColor: `#${sortedColors[3]}` }}
                      className={`w-16 h-8 flex justify-center items-center text-sm rounded-3xl`}
                    >
                      243K
                    </div>
                    <div
                      style={{ backgroundColor: `#${sortedColors[3]}` }}
                      className={`w-16 h-36 rounded-3xl`}
                    ></div>
                  </div>
                  <p className={`mt-1`}>Thu</p>
                </div>
                <div className={`text-center`}>
                  <div
                    style={{ backgroundColor: `#${sortedColors[4]}` }}
                    className={`w-16 h-28 rounded-3xl`}
                  ></div>
                  <p className={`mt-1`}>Fri</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`bg-stone-100 p-5 my-10 rounded-xl`}>
            <div className={`flex justify-between items-center`}>
              <div className={`mb-1`}>
                <h1 className={`text-3xl font-medium mb-1`}>Order</h1>
                <p>Based on social media</p>
              </div>
              <div className={`flex justify-center items-center gap-5`}>
                <h1 className={`p-2 px-4 bg-stone-200 rounded-full`}>
                  Monthly
                </h1>
                <p className={`p-2 bg-stone-200 rounded-full`}>
                  <Settings2 absoluteStrokeWidth size={28} strokeWidth={1.2} />
                </p>
              </div>
            </div>
            <div className={`flex justify-between items-center gap-x-5 my-2`}>
              <h1 className={`font-normal`}>FaceBook</h1>
              <div className={`grid grid-cols-3 gap-3 w-full *:rounded-3xl`}>
                <div className={`w-full h-14 bg-stone-500`}></div>
                <div className={`w-full h-14 bg-stone-500`}></div>
                <div className={`w-full h-14 bg-stone-500`}></div>
              </div>
            </div>
            <div className={`flex justify-between items-center gap-x-5 my-2`}>
              <h1 className={`font-normal`}>FaceBook</h1>
              <div className={`grid grid-cols-3 gap-3 w-full *:rounded-3xl`}>
                <div className={`w-full h-14 bg-stone-500`}></div>
                <div className={`w-full h-14 bg-stone-500`}></div>
                <div className={`w-full h-14 bg-stone-500`}></div>
              </div>
            </div>
            <div className={`flex justify-between items-center gap-x-5 my-2`}>
              <h1 className={`font-normal`}>FaceBook</h1>
              <div className={`grid grid-cols-3 gap-3 w-full *:rounded-3xl`}>
                <div className={`w-full h-14 bg-stone-500`}></div>
                <div className={`w-full h-14 bg-stone-500`}></div>
                <div className={`w-full h-14 bg-stone-500`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
