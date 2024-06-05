import Map from "@/components/Map";

const pl_items = [
  {
    id: 12345,
    title: "Octan",
    address: "вулиця Нижньоюрківська, 31, Київ, 04080",
    workingHours: "workingHours",
    position: [50.46634785961289, 30.50080038356197],
  },
  {
    id: 12345,
    title: "Vinyl Centr",
    address: "вулиця Євгена Чикаленка, 9a, Київ, 01001",
    workingHours: "workingHours",
    position: [50.44732009605627, 30.522512388754446],
  },
  {
    id: 12345,
    title: "Entrall",
    address: "вулиця Володимирська, 82, Київ, 02000",
    workingHours: "workingHours",
    position: [50.43551471419889, 30.50950877194944],
  },
  {
    id: 12345,
    title: "GRAM",
    address: "вулиця Мала Житомирська, 16/3, Київ, 02000",
    workingHours: "workingHours",
    position: [50.453923169383195, 30.525359888604378],
  },
  {
    id: 12345,
    title: "The Vinyl",
    address: "вулиця Олеся Гончара, 4, Київ, 02000",
    workingHours: "workingHours",
    position: [50.455662770090676, 30.514993332505757],
  },
];

export default function Places() {
  return (
    <>
      {/* <p>Places:</p>

      {pl_items.map((item) => {
        return (
          <div>
            <p>{item.title}</p>
          </div>
        );
      })} */}

      <Map markers={pl_items} />
    </>
  );
}
