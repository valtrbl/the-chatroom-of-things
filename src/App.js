import { useState, useEffect } from "react";

const EnterScreen = ({ setEntered }) => (
  <div className="flex items-center justify-center container h-screen mx-auto">
    <div className="bg-white border-4 border-$cyan w-4/5 lg:w-2/5 xl:w-3/5 flex justify-center items-center flex-col space-y-12 font-$ocr p-10 text-center filter drop-shadow-$red-md">
      <h1 className="text-$cyan text-5xl filter drop-shadow-$red-sm leading-relaxed">
        The Chatroom of Things
      </h1>
      <button
        onClick={() => {
          setEntered(true);
        }}
        className="text-xl bg-$cyan text-white pb-3 pt-4 px-6 "
      >
        ENTER
      </button>
    </div>
  </div>
);

const addDefaultIcon = (ev) => {
  ev.target.src = "img/icons/default.png";
};

const BotListView = ({ bot }) => {
  return (
    <>
      {bot.exists === true ? (
        <a
          className="flex py-4 items-center space-x-8 font-$roc hover:bg-gray-100 transition-colors group"
          tabIndex={bot.id}
          href={`/bots/${bot.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-24 h-24 bg-cover transition-all text-xs"
            src={`img/icons/${bot.id}.png`}
            alt={`Icon for group ${bot.id}`}
            onError={addDefaultIcon}
          />
          <p className="font-$ocr">{bot.tagline.length > 0 ? bot.tagline : bot.name}</p>
        </a>
      ) : (
        <div
          className="flex py-4 items-center space-x-8 font-$roc transition-colors group opacity-50"
          tabIndex={bot.id}
        >
          <img
            className="w-24 h-24 bg-cover transition-all text-xs"
            src={`img/icons/${bot.id}.png`}
            alt={`Icon for group ${bot.id}`}
            onError={addDefaultIcon}
          />
          <p className="font-$ocr">{bot.tagline.length > 0 ? bot.tagline : bot.name}</p>
        </div>
      )}
    </>
  );
};

const BotIndexView = ({ bot }) => (
  <div className="space-y-2 p-4">
    <img
      onError={addDefaultIcon}
      src={`img/icons/${bot.id}.png`}
      alt={`Icon for group ${bot.id}`}
      className="h-28 w-40 bg-gray-50 rounded-md object-scale-down"
    />
    <p className="font-$ocr">{bot.id}</p>
  </div>
);

const views = ["Home", "Index"];

const icons = [
  "1.1.png",
  "1.2.png",
  "1.4.png",
  "1.5.png",
  "2.5.png",
  "3.6.png",
  "4.1.png",
  "4.5.png",
  "4.6.png",
];

const Background = () => {
  const randomIcons = icons
    .sort(() => Math.random() - Math.random())
    .slice(0, 5);
  return (
    <div className="fixed w-screen h-screen ">
      {randomIcons.map((icon, index) => (
        <img
          key={index}
          src={`/img/icons/${icon}`}
          alt="icon"
          className="w-48 h-48 fixed"
          style={{
            left: `calc(${Math.floor(Math.random() * 100)}vw - 12rem)`,
            top: `calc(${Math.floor(Math.random() * 100)}vh - 12rem)`,
          }}
        />
      ))}
    </div>
  );
};

const App = () => {
  const [bots, setBots] = useState();
  const [entered, setEntered] = useState();
  const [indexView, setIndexView] = useState(views[0]);

  useEffect(() => {
    const fetchTerms = () => {
      fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setBots(json.data);
        });
    };
    fetchTerms();
  }, []);

  return (
    <>
      {entered ? (
        <div className="max-h-screen flex flex-col font-$ocr">
          <header className="flex items-center justify-center container mx-auto my-12 px-12">
            <div className="bg-white border-4 border-$cyan flex justify-center items-center flex-col space-y-12 font-$ocr p-6 md:p-10 text-center filter drop-shadow-$red-md">
              <h1 className="text-$cyan text-xl md:text-3xl filter">
                The Chatroom of Things
              </h1>
            </div>
          </header>
          <div className="w-full flex flex-col overflow-y-scroll">
            <div className="border-b-2 border-$cyan flex">
              <div className="ml-12 space-x-12 flex self-end">
                {views.map((view, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        setIndexView(view);
                      }}
                      className={indexView === view ? "$tab $active" : "$tab"}
                    >
                      {view}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-white overflow-y-scroll relative scrollbar">
              <div className="p-8">
                {indexView !== views[0] ? (
                  <>
                    <div className="flex flex-wrap mb-12">
                      {bots?.length > 0 &&
                        bots.map((bot, index) => (
                          <BotIndexView key={index} bot={bot} />
                        ))}
                    </div>
                    <div className="space-y-6">
                      {bots?.length > 0 &&
                        bots.map((bot, index) => (
                          <div
                            className="md:flex w-full px-6 space-y-2 pt-4 pb-8 border-b-2"
                            key={index}
                            bot={bot}
                          >
                            <p className=" w-72 mr-10">{bot.name || "––"}</p>
                            <p className="space-x-8">
                              {bot.members.map((member, index) => (
                                <span key={index}>{member}</span>
                              ))}
                            </p>
                          </div>
                        ))}
                    </div>
                  </>
                ) : (
                  <div className="divide-y px-6">
                    {bots?.length > 0 &&
                      bots.map((bot, index) => (
                        <BotListView key={index} bot={bot} />
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="relative flex overflow-x-hidden bg-$cyan h-60 py-4 text-white items-center">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-lg">
                The Chatroom of Things is an imitation of a chatroom exploring
                the poetic potential of sentient objects and how they interact
                with users. &nbsp;
              </span>
            </div>
            <div className="absolute animate-marquee2 whitespace-nowrap">
              <span className="text-lg">
                The Chatroom of Things is an imitation of a chatroom exploring
                the poetic potential of sentient objects and how they interact
                with users. &nbsp;
              </span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Background />
          <EnterScreen setEntered={setEntered} />
        </>
      )}
    </>
  );
};

export default App;
