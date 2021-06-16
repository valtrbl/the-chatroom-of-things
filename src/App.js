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

const BotListView = ({ bot }) => (
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
        />
        <p>{bot.tagline.length > 0 ? bot.tagline : bot.name}</p>
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
        />
        <p>{bot.tagline.length > 0 ? bot.tagline : bot.name}</p>
      </div>
    )}
  </>
);

const BotIndexView = ({ bot }) => (
  <div className="space-y-2 p-4">
    <div
      className="h-28 w-40 bg-gray-50 rounded-md bg-cover"
      style={{ backgroundImage: `url(img/icons/${bot.id}.png)` }}
    />
    <p>{bot.id}</p>
  </div>
);

const views = ["Home", "Index"];

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
                            className="md:flex w-full px-6 space-y-2 py-4"
                            key={index}
                            bot={bot}
                          >
                            <p className="w-24 mr-10">{bot.id}</p>
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
            <div className="bg-white p-8 border-t border-$cyan">
              <p>Choose a chatbot to talk to...</p>
            </div>
          </div>
          <div className="relative flex overflow-x-hidden bg-$cyan text-white h-96 items-center">
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
        <EnterScreen setEntered={setEntered} />
      )}
    </>
  );
};

export default App;
