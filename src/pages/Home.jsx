import { useState, useEffect } from "react";
import JournalCover from "../components/journal/JournalCover";
import JournalInterior from "../components/journal/JournalInterior";

export default function Home() {
  const [journalOpen, setJournalOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [plants, setPlants] = useState([]);

  const handleOpen = ({ profile, plants, zip: digits }) => {
    setProfile(profile);
    setPlants(plants);
    setJournalOpen(true);
    localStorage.setItem(

      "nativePlantJournal",

      JSON.stringify({ profile, plants, zip: digits })
    );
  };

  const handleClose = () => {
    setJournalOpen(false);
    setProfile(null);
    setPlants([]);
    localStorage.removeItem("nativePlantJournal");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const saved = localStorage.getItem("nativePlantJournal");

    if (saved) {
      const parsed = JSON.parse(saved);
      setProfile(parsed.profile);
      setPlants(parsed.plants);
      setJournalOpen(true);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {!journalOpen
        ? <JournalCover onOpen={handleOpen} />
        : <JournalInterior profile={profile} plants={plants} onClose={handleClose} />
      }
    </div>
  );
}