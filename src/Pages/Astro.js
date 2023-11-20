import { Link, useNavigate } from "react-router-dom"
import "../Stylesheets/Astrologers.scss"
import { useEffect, useState } from "react"
import { MDBDataTable } from 'mdbreact';
import { Button, Badge } from "react-bootstrap";


function Astrologers() {
    const [astrologers, setAstrologers] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("http://localhost:8000/api/v1/astrologer/allAstrologers", {
                method: "GET",
            });
            // console.log(response);
            let data = await response.json();
            console.log(data)
            setAstrologers(data.astrologers)
            console.log(astrologers);
        }
        fetchData();
    }, []);


    // const setAstro = () => {
    const data = {
        columns: [
            {
                label: 'S.No',
                field: 'SNo',
                sort: 'asc'
            },
            {
                label: 'Astrologer ID',
                field: 'astroID',
                sort: 'asc'
            },
            {
                label: 'Name',
                field: 'name',
                sort: 'asc'
            },

            {
                label: 'Email',
                field: 'email',
                sort: 'asc'
            },
            {
                label: 'Mobile No.',
                field: 'mobile',
                sort: 'asc'
            },
            {
                label: 'Status',
                field: 'status',
                sort: 'asc'
            },
            {
                label: 'View Details',
                field: 'viewDetails',
                sort: 'asc'
            },
           

        ],
        rows: []
    }
    astrologers?.forEach((ele, index) => {
        data.rows.push({
            SNo: <p> {index + 1}</p>,
            astroID: ele?.astrologerID,
            name: ele?.firstname,
            email: ele?.email,
            mobile: ele?.mobilePrimary,
            status: ele?.isActive ? (<Badge bg="success">Active</Badge>) : (<Badge bg="danger">Inactive</Badge>),
            viewDetails: <Button variant="warning" onClick={() => navigate(`/astrologer/${ele?._id}`)} >
                View
            </Button>,
        })

    })
    //     return data;
    // }

    return (
        <main id="admin-astro">
            <section className="astro-head">
                <div>
                    <h4>Astrologers</h4>
                    <div style={{ height: "3px", width: "40px", backgroundColor: "#0042ae", borderRadius: "10px", marginTop: "3px" }}></div>
                </div>
                <div>
                    <Link to="/addastrologers" className="addAstroLink">Add Astrologers</Link>
                </div>
            </section>

            <section className="my-4">
                <MDBDataTable
                    data={data}
                    bordered
                    striped
                    responsive
                    hover
                    noBottomColumns={true}
                    noRecordsFoundLabel="No records found"
                    className="text-center py-1 mt-2 "
                />
            </section>
        </main>
    )
}


export default Astrologers