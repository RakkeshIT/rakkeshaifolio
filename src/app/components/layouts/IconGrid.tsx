import Image from 'next/image'



export const IconGrid = ({data, iconMap, bg}: {data: any[], iconMap: Record<string, any>, bg:string}) => (
  <div
  className={`grid gap-4
              grid-cols-2 
              sm:grid-cols-3 
              md:grid-cols-4 
              lg:grid-cols-5`}
>
  {data.map((item) => (
    <div
      key={item.id}
      className={`${bg} rounded-xl flex flex-col items-center justify-center p-3`}
    >
      {iconMap[item.name] && (<Image
        src={iconMap[item.name]}
        alt={item.label}
        width={28}
        height={28}
      />)}
      <span className="text-[10px] mt-1 text-center">{item.label}</span>
    </div>
  ))}
  <div
      className={`${bg} rounded-xl flex flex-col items-center justify-center p-3 animate-pulse border border-dashed border-gray-400`}
    >
      <span className="text-[10px] text-center font-semibold">
        I'm Learning
      </span>
      <span className="text-[10px] text-center">
        Other Skills...
      </span>
    </div>  
</div>

)