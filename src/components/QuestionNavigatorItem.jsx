export default function QuestionNavigatorItem({
  index,
  setQuestion,
  className,
}) {
  return (
    <button className={className} onClick={() => setQuestion(index)}>
      {index + 1}
    </button>
  );
}
