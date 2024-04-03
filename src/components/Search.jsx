import { useState } from "react";
function Search(props) {
    const [search, setSearch] = useState("");

    const onSearchChange = () => {
        props.onSearchChange(search);
    };

    const searchKeydown = (e) => {
        if (e.key === "Enter") {
            onSearchChange();
        }
    };

return (
    <>
        {/* changeSearch akan mentriger inisiasi event di baris kode atas. */}
        <div>Cari Artikel :{" "} 
        <input  onChange = {(e) => setSearch(e.target.value)}
                onKeyDown = {searchKeydown}>
        </input>

        <button onClick = {onSearchChange}>Cari</button>

        </div>
        {/* variabel search akan mengambil data event yang telah dilakukan user dan menampilkan di bawah. */}
        <small>
            Ditemukan {props.totalPosts} data dengan pencarian kata {search}
        </small>
    </>
)
}
export default Search;
