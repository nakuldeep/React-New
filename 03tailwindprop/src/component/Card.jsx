import "../App.css";

function Card({ imgUrl, username = "UserName", role = "Role" }) {
  return (
    <>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div>
          <img
            className="size-48 shadow-xl rounded-md object-cover"
            alt="Image"
            src={imgUrl}
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center md:items-start text-center md:text-left space-y-2">
          <span className="text-2xl font-semibold text-white">{username}</span>
          <span className="font-medium text-sky-400">{role}</span>
          <span className="flex justify-center gap-2 font-medium text-gray-300">
            <span>No. 1</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
