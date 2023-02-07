import { CollegeLogo, Events, Footer, PageHead } from "components";
import { ComingSoon } from "components";
import { debugEvents } from "data/debugEvents";

export default function Handila() {
  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        {debugEvents.handila?.length > 0 ? (
          <Events
            clubName={"Handila(SNUC Art Club)"}
            eventDetails={debugEvents.handila}
          />
        ) : (
          <ComingSoon />
        )}
      </div>
      <Footer />
    </>
  );
}
