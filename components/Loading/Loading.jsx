const Loading = () => {
  return (
    // <div className="w-14 h-14 rounded-full border-2 animate-ping in bg-blue-600"></div>
    <div className="flex justify-center mt-5">
      <div className="flex items-center px-5">
        <span className="w-8 h-8 mr-3 rounded-full bg-gray-300 border-2 animate-bounce"></span>
        <span className="w-8 h-8 mr-3 rounded-full bg-red-600 border-2 animate-bounce delay-1000"></span>
        <span className="w-8 h-8 mr-3 rounded-full bg-yellow-500 border-2 animate-bounce"></span>
        <span className="w-8 h-8 mr-3 rounded-full bg-green-600 border-2 animate-bounce delay-1000"></span>
        <span className="w-8 h-8 mr-3 rounded-full bg-blue-600 border-2 animate-bounce"></span>
      </div>
    </div>
  )
}

export default Loading