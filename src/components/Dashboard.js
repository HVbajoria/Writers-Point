import Container from "./Container";
import Navbar from "./Navbar";
export default function Dashboard() {

    return (
        <div className="flex flex-col w-screen h-screen Scroll overflow-y-scroll ">
            <Navbar />
            <hr
        style={{
          background: 'lime',
          color: 'lime',
          borderColor: 'lime',
          height: '2.5px',
        }}
      />

            <Container />
        </div>
    );
}
