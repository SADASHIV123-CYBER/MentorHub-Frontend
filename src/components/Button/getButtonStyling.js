function getButtonStyling(styleType) {
  const base =
    "px-4 py-2 font-medium rounded-md transition duration-200"; // removed focus styles

  switch (styleType) {
    case "primary":
      return `${base} bg-blue-600 text-white shadow-sm hover:bg-blue-700`;
    case "secondary":
      return `${base} bg-white border border-gray-300 text-gray-700 hover:bg-gray-50`;
    case "success":
      return `${base} bg-green-600 text-white shadow hover:bg-green-700`;
    case "warning":
      return `${base} bg-yellow-400 text-black shadow hover:bg-yellow-500`;
    case "error":
      return `${base} bg-red-600 text-white hover:bg-red-700`;
    case "outline":
      return `${base} border border-gray-400 text-gray-700 hover:bg-gray-100`;
    case "disabled":
      return `${base} bg-gray-200 text-gray-500 cursor-not-allowed opacity-70`;
      case "signIn":
        return `px-4 py-2 font-medium rounded-4xl transition duration-200  bg-[#E5EEE8] text-[#2DA58D] hover:bg-[#F0F5F2] cursor-pointer `
      case "special-btn":
        return `px-4 py-2 font-medium rounded-4xl transition duration-200 bg-[#2DA58D] text-white  transition-all duration-150 hover:-translate-y-px cursor-pointer`
    default:
      return `${base} bg-gray-100 text-black hover:bg-gray-200`;
  }
}

export default getButtonStyling;
