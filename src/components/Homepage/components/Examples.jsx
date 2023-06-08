import { useState, useEffect } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { exampleComponentData } from "../../../data/exampleComponentData";

function Examples() {
  const [data, setData] = useState([]);
  const isAboveMdScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    setData(exampleComponentData);
  }, []);

  const renderElement = data.map((obj) => {
    return !isAboveMdScreens ? (
      <div className="flex flex-col gap-4 text-start" key={obj.id}>
        <h2 className="text-3xl font-medium text-headerColor">{obj.header1}</h2>
        <p className="text-base font-medium">{obj.header2}</p>
        <p className="text-base">{obj.p1}</p>
        <p className="text-base">{obj.p2}</p>
        <p className="text-base">{obj.p3}</p>
      </div>
    ) : (
      <>
        {obj.id % 2 === 0 ? (
          <div
            className="flex items-center gap-36 pb-16 lg:gap-48"
            key={obj.id}
          >
            <div className="flex basis-2/5 flex-col gap-8 text-start">
              <h2 className="text-2xl font-medium text-headerColor lg:text-3xl">
                {obj.header1}
              </h2>
              <p className="text-base font-medium lg:text-lg">{obj.header2}</p>
              <p className="text-base lg:text-lg">{obj.p1}</p>
              <p className="text-base lg:text-lg">{obj.p2}</p>
              <p className="text-base lg:text-lg">{obj.p3}</p>
            </div>
            <div className="max-h-xl max-w-xl basis-3/5 overflow-hidden rounded-md">
              <img src={obj.img} alt="Photo" className="aspect-square" />
            </div>
          </div>
        ) : (
          <div
            className="flex items-center gap-36 pb-16 lg:gap-48"
            key={obj.id}
          >
            <div className="max-h-xl max-w-xl basis-3/5 overflow-hidden rounded-md">
              <img src={obj.img} alt="Photo" className="aspect-square" />
            </div>

            <div className="flex basis-2/5 flex-col gap-8 text-start">
              <h2 className="text-2xl font-medium text-headerColor lg:text-3xl">
                {obj.header1}
              </h2>
              <p className="text-base font-medium lg:text-lg">{obj.header2}</p>
              <p className="text-base lg:text-lg">{obj.p1}</p>
              <p className="text-base lg:text-lg">{obj.p2}</p>
              <p className="text-base lg:text-lg">{obj.p3}</p>
            </div>
          </div>
        )}
      </>
    );
  });

  return (
    <div className="mx-auto flex h-screen w-3/5 flex-col gap-10 py-5 md:h-full md:gap-20 md:py-10">
      {renderElement}
    </div>
  );
}

export default Examples;
