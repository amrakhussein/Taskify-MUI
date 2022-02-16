export default function TaskListCardInput({ inputValues, handleChange }) {

  return (
    <>
      <input
        type="text"
        value={inputValues.title}
        name="title"
        placeholder="Add Title"
        onChange={handleChange}
        sx={{}}
      />

      <input
        type="text"
        value={inputValues.content}
        name="content"
        placeholder="Add Details..."
        onChange={handleChange}
        sx={{}}
      />
    </>
  )
}
