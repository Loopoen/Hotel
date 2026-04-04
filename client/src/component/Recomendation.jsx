import { Map, MapPin, Compass, Navigation } from "lucide-react";
import { Link } from "react-router";

export const DESTINATIONS = [
  {
    id: "dest-1",
    name: "Phú Quốc",
    properties: 124,
    image: "https://images.unsplash.com/photo-1698809807960-758cf416e96e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHUlMjBxdW9jJTIwYmVhY2glMjB2aWV0bmFtfGVufDF8fHx8MTc3NTE0MjYxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "dest-2",
    name: "Nha Trang",
    properties: 85,
    image: "https://images.unsplash.com/photo-1658992461978-a6bcfd4bd956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaGElMjB0cmFuZyUyMGJlYWNoJTIwY2l0eXxlbnwxfHx8fDE3NzUxNDI2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "dest-3",
    name: "Đà Nẵng",
    properties: 210,
    image: "https://images.unsplash.com/photo-1771425953641-cb49685460b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYSUyMG5hbmclMjBicmlkZ2UlMjByaXZlcnxlbnwxfHx8fDE3NzUxNDI2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Recomendation() {
  const articles = [
    {
      id: 1,
      title: "Cẩm nang du lịch Phú Quốc 3 ngày 2 đêm từ A-Z",
      excerpt:
        "Khám phá đảo ngọc Phú Quốc với lịch trình chi tiết, những bãi biển hoang sơ đẹp nhất và ẩm thực hải sản phong phú.",
      image:
        "https://images.unsplash.com/photo-1698809807960-758cf416e96e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHUlMjBxdW9jJTIwYmVhY2glMjB2aWV0bmFtfGVufDF8fHx8MTc3NTE0MjYxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      link: "https://www.bing.com",
    },
    {
      id: 2,
      title: "Top 5 vịnh biển đẹp nhất Việt Nam phải đến một lần",
      excerpt:
        "Từ Vịnh Hạ Long hùng vĩ đến Vịnh Ninh Vân hoang sơ, điểm danh những vùng vịnh đẹp đến nao lòng của nước ta.",
      image:
        "https://images.unsplash.com/photo-1671468158340-11c74b9466d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
      link: "https://www.bing.com",
    },
    {
      id: 3,
      title: "Trải nghiệm resort cao cấp tại Đà Nẵng",
      excerpt:
        "Review chân thực về những khu nghỉ dưỡng 5 sao bậc nhất bên bờ biển Mỹ Khê thơ mộng.",
      image:
        "https://images.unsplash.com/photo-1771425953641-cb49685460b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
      link: "https://www.bing.com",
    },
  ];

  return (
    <div className="bg-[#FDFAF6] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="bg-amber-100 text-amber-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Compass className="w-8 h-8" />
          </div>

          <h1 className="text-4xl font-extrabold text-slate-800 mb-4">
            Khám phá vùng đất mới
          </h1>

          <p className="text-slate-600 text-lg">
            Cùng Oanh Hotel khám phá những điểm đến ven biển tuyệt đẹp
          </p>
        </div>

        {/* Destination */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
            <Map className="w-6 h-6 text-amber-500" />
            Điểm đến hấp dẫn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS.map((dest) => (
              <Link
                to={`/search?q=${dest.name}`}
                key={dest.id}
                className="group relative rounded-3xl overflow-hidden h-80 shadow-md"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-1">
                      <MapPin className="w-5 h-5 text-amber-300" />
                      {dest.name}
                    </h3>

                    <p className="text-amber-200 font-medium">
                      {dest.properties} chỗ nghỉ
                    </p>
                  </div>

                  <div className="bg-white/20 backdrop-blur p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition">
                    <Navigation className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-8 border-t pt-12">
            Cẩm nang du lịch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-amber-100 hover:shadow-xl transition"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-4 left-4 bg-white text-amber-800 text-xs font-bold px-3 py-1 rounded-lg">
                    Review
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 mb-4">
                    {article.excerpt}
                  </p>

                  <a
                    href={article.link}
                    target="_blank"
                    className="text-amber-600 font-bold hover:text-amber-700"
                  >
                    Đọc tiếp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}