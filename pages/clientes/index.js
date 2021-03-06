import { useState, useEffect } from "react";

const columnas = [
    // Campos
    "cliente", // opcional
    "nombre_fis", // requerido
    "calle", // requerido
    "colonia", // requerido
    "pobla", // requerido
    "ciudad", // requerido
    "estado", // requerido
    "pais", // requerido
    "telefono", // requerido
    "dias", // opcional
    "credito", // opcional
    "desc1", // opcional
    "rfc", // requerido
    "clasificacion", // requerido
    "contacto", // requerido
    "cobrador", // requerido
    "vend", // requerido
    "precio", // opcional
    "cp", // requerido
    "diasrevision", // requerido
    "observ", // requerido
    "zona", // requerido
    "correo", // requerido
    "url", // requerido
    "saldo", // opcional
    "usuario", // requerido
    "usuhora", // requerido
    "usufecha", // requerido
    "diascobro", // requerido
    "bloqueado", // opcional
    "web", // requerido
    "emailcobranza", // requerido
    "foto", // requerido
    "puntos", // opcional
    "recomendado", // requerido
    "numerointerior", // requerido
    "numeroexterior", // requerido
    "uso", // requerido
    "paiscomextrecep", // opcional
    "municipiocomextrecep", // opcional
    "localidadcomextrecep", // opcional
    "estadocomextrecep", // opcional
    "coloniacomextrecep", // opcional
    "residenciafiscal", // requerido
    "numregidtrib", // requerido
    "complementoexterior", // opcional
]

const usePostFormularioNuevo = (url, data = {}) => {
    const [status, setStatus] = useState("api-awake");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            console.log("fetch");
            setStatus("api-fetching");
            data.id = `cliente${Math.random().toString(32).slice(2)}`;
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    mode: "cors",
                    body: JSON.stringify(data)
                });
                if (!response.ok) {
                    const text = await response.text();
                    console.log(`Error:`, text);
                    console.log(response);
                    setStatus("api-error");
                    setError(`${response.statusText}/${text}`);
                    return;
                }
                setStatus("api-fetched");
                const json = await response.json();
                console.log(json);
                // setResult(json);
                setStatus("api-done");
            } catch(error) {
                console.warn(`${error}`);
            }
        })();
    }, []);

    return [status, error, result];
};

const DoFormularioNuevo = props => {
    const { data } = props;
    
    const name = "clientes";

    const url = `https://kapi-${name}.badillosoft.now.sh/api/${name}/new`;
    // const url = `http://localhost:3000/api/${name}/new`;

    const [status, error, result] = usePostFormularioNuevo(url, data);

    return (
        <div className="d-flex flex-column">
            <span>Status: <code>{status || "-"}</code></span>
            <span>Error: <code>{error || "-"}</code></span>
            <span>Result: <code>{result || "-"}</code></span>
        </div>
    );
};

const FormularioNuevo = props => {
    const [status, setStatus] = useState("wait");
    const form = (
        <>
            <div>
                <h3>Datos requeridos</h3>
            </div>
            <div className="p-3 border">
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>nombre_fis</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>calle</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>colonia</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>pobla</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>ciudad</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>estado</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>pais</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>telefono</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>rfc</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>clasificacion</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>contacto</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>cobrador</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>vend</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>cp</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>diasrevision</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>observ</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>zona</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>correo</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>url</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>usuario</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>usuhora</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>usufecha</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="date" className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>diascobro</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>web</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>emailcobranza</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>foto</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>recomendado</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>numerointerior</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>numeroexterior</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>uso</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>residenciafiscal</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>numregidtrib</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control" required />
                    </div>
                </div>
            </div>
            <div>
                <h3>Datos opcionales</h3>
            </div>
            <div className="p-3 border">
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>cliente</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>dias</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>credito</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>desc1</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>precio</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>saldo</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex justify-content-end align-items-center mb-2">
                    <span className="mr-2">bloqueado</span>
                    <input type="checkbox"  />
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>puntos</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>paiscomextrecep</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>municipiocomextrecep</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>localidadcomextrecep</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>estadocomextrecep</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>coloniacomextrecep</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input className="form-control"  />
                    </div>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <div className="mr-2"><code>complementoexterior</code></div>
                    <div className="flex-grow-1 ml-2 border-top" />
                    <div className="">
                        <input type="number" className="form-control"  />
                    </div>
                </div>
            </div>
        </>
    );
    const doForm = <DoFormularioNuevo />
    const render = status === "wait" ? form : doForm;
    return (
        <div className="flex-grow-1 d-flex flex-column border p-3 overflow-hidden">
            <div className="d-flex justify-content-between border-bottom w-100">
                <h1>Nuevo {"cliente"}</h1>
                <button className="btn btn-success" onClick={() => setStatus("do")}>Nuevo</button>
            </div>
            <div className="d-flex flex-column text-left overflow-auto">
                {render}
            </div>
        </div>
    );
};

const TablaConsultar = props => {
    const { columnas } = props;

    return (
        <table className="table" style={{
            overflowX: "auto"
        }}>
            <thead>
                <tr>
                    {columnas.filter(({ checked }) => checked).map(({ columnName }, index) => (
                        <th key={`column-${index}`}>{columnName.toUpperCase()}</th>
                    ))}
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    );
};

export default props => {
    const [panelOpen, setPanelOpen] = useState(false);
    const [panel, setPanel] = useState(null);

    const [currentColumnas, setCurrentColumnas] = useState([
        "id",
        ...columnas
    ].map((columnName, index) => {
        return { columnName, checked: index < 10 };
    }));

    return (
        <div className="d-flex flex-column container py-3 vh-100 overflow-hidden">
            <h1>Módulo de <span className="text-primary">{"clientes".toUpperCase()}</span></h1>
            <div className="d-flex justify-content-between mb-2">
                <span>Tabla de {"clientes"}</span>
                <span>Total: 0</span>
                {
                    !panelOpen ? (
                        <div className="d-flex" onClick={() => {
                            setPanel(<FormularioNuevo />);
                            setPanelOpen(true);
                        }} style={{
                            cursor: "pointer"
                        }}>
                            <span className="mr-2"><strong>Nuevo {"cliente"}</strong></span>
                            <span className="text-success"><i className="fas fa-plus-circle" /></span>
                        </div>
                    ) : (
                            <button className="btn btn-link" onClick={() => {
                                setPanelOpen(false);
                            }}>cancelar</button>
                        )
                }
            </div>
            <div className="d-flex h-100 overflow-hidden">
                <div className="h-100 mr-4 border-bottom border-left border-right overflow-auto" style={{
                    minWidth: "200px"
                }}>
                    {currentColumnas.map(({ columnName, checked }, index) => (
                        <div key={`select-col-${index}`} className="d-flex flex-nowrap align-items-center">
                            <span className="mr-2">{columnName.toUpperCase()}</span>
                            <input type="checkbox" checked={checked} onChange={event => {
                                setCurrentColumnas([
                                    ...currentColumnas.slice(0, index),
                                    { columnName, checked: event.target.checked },
                                    ...currentColumnas.slice(index + 1),
                                ]);
                            }} />
                        </div>
                    ))}
                </div>
                <div className="h-100 flex-grow-1 mr-4 border-bottom border-left border-right overflow-auto">
                    <TablaConsultar columnas={currentColumnas} />
                </div>
                {
                    panelOpen ? (
                        <div className="flex-grow-1 d-flex flex-column h-100" style={{
                            minWidth: "50%"
                        }}>
                            {panel}
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
};