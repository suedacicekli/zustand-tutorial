import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import Drawer from "../../components/drawer/Drawer";

interface TutorialProps {
  after: string;
  before: string;
  content: string;
}

function Tutorial({ after, before, content }: TutorialProps): JSX.Element {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    import(content).then((res) => {
      console.log(content);
      console.log(res.default);
      fetch(res.default)
        .then((response) => {
          console.log(response);
          return response.text();
        })
        .then((text) => {
          console.log(text);
          setMarkdown(text);
        })
        .catch((error) => {
          console.error("Error fetching markdown:", error);
        });
    });
  }, []);

  return (
    <>
      <Drawer />
      <div className="p-4 sm:ml-64">
        <div className="prose max-w-3xl mx-auto mt-10">
          <Markdown>{markdown}</Markdown>
          <div className="flex gap-5">
            <a
              href={before ? before : "/"}
              className="btn btn-danger no-underline	">
              Önceki
            </a>

            <a
              href={after ? after : "/playstation-demo"}
              className="btn btn-danger no-underline	ml-auto">
              Sonraki
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tutorial;
