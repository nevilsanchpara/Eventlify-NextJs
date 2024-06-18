import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";

const CreateEvent = () => {
  const { sessionClaims, session, userId } = auth();
  const { isSignedIn, user, isLoaded } = useUser();
  console.log("user", user);
  console.log("userId", userId);

  console.log(sessionClaims, "session", session, "session");
  const a = sessionClaims?.userId as string;
  console.log(" Useid page", a);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={a} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
