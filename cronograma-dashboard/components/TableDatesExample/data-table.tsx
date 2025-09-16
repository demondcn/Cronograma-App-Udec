"use client"
import { useState, useMemo } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Save, X, Filter, FilterX, Search } from "lucide-react"

interface Column {
  key: string
  label: string
  type?: "text" | "number" | "date" | "boolean"
}

interface DataTableProps {
  title: string
  columns: Column[]
  data: any[]
  onEdit: (id: string, updatedData: any) => Promise<void>
  onDelete: (id: string) => Promise<void>
  colorScheme: string
}

export function DataTable({ title, columns, data, onEdit, onDelete, colorScheme }: DataTableProps) {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editData, setEditData] = useState<any>({})
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<Record<string, string>>({})

  const filteredData = useMemo(() => {
    if (Object.keys(filters).length === 0) return data

    return data.filter((row) => {
      return Object.entries(filters).every(([key, filterValue]) => {
        if (!filterValue) return true

        const cellValue = row[key]
        const column = columns.find((col) => col.key === key)

        if (cellValue === null || cellValue === undefined) return false

        switch (column?.type) {
          case "boolean":
            const boolValue = cellValue ? "sí" : "no"
            return boolValue.toLowerCase().includes(filterValue.toLowerCase())
          case "number":
            return cellValue.toString().includes(filterValue)
          case "date":
            const dateStr = new Date(cellValue).toLocaleDateString()
            return dateStr.toLowerCase().includes(filterValue.toLowerCase())
          default:
            return cellValue.toString().toLowerCase().includes(filterValue.toLowerCase())
        }
      })
    })
  }, [data, filters, columns])

  const handleEdit = (row: any) => {
    setEditingId(row.id)
    setEditData({ ...row })
  }

  const handleSave = async () => {
    if (editingId) {
      await onEdit(editingId, editData)
      setEditingId(null)
      setEditData({})
    }
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditData({})
  }

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este registro?")) {
      await onDelete(id)
    }
  }

  const handleFilterChange = (columnKey: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [columnKey]: value,
    }))
  }

  const clearAllFilters = () => {
    setFilters({})
  }

  const activeFiltersCount = Object.values(filters).filter(Boolean).length

  const formatValue = (value: any, type?: string) => {
    if (value === null || value === undefined) return "-"

    switch (type) {
      case "date":
        return new Date(value).toLocaleDateString()
      case "boolean":
        return value ? "Sí" : "No"
      default:
        return String(value)
    }
  }

  return (
    <Card
      className={`bg-green-900/10 backdrop-blur-sm border-2 border-green-400/30 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20`}
    >
      <CardHeader className="pb-4 border-b-2 border-green-400/30">
        <div className="flex items-center justify-between">
          <CardTitle className="text-green-200 font-sans text-xl font-bold flex items-center gap-3">
            {title}
            <Badge variant="outline" className="bg-green-900/30 text-green-300 border-green-400/40">
              {filteredData.length} de {data.length} registros
            </Badge>
          </CardTitle>

          <div className="flex items-center gap-2">
            {activeFiltersCount > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearAllFilters}
                className="border-red-400/50 text-red-300 hover:bg-red-900/20 bg-transparent"
              >
                <FilterX className="w-4 h-4 mr-1" />
                Limpiar ({activeFiltersCount})
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className={`border-green-600/70 text-green-800 hover:bg-green-100/80 bg-green-50/60 ${showFilters ? "bg-green-100/90 text-green-900" : ""}`}
            >
              <Filter className="w-4 h-4 mr-1" />
              Filtros
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="overflow-x-auto rounded-lg border-2 border-green-400/40 bg-green-900/5">
          <Table className="table-enhanced">
            <TableHeader>
              <TableRow className="border-b-2 border-green-400/40 bg-green-900/20 hover:bg-green-900/30">
                {columns.map((column) => (
                  <TableHead
                    key={column.key}
                    className="text-green-200 font-sans font-semibold text-sm border-r-2 border-green-400/30 last:border-r-0 bg-green-900/10"
                  >
                    {column.label}
                  </TableHead>
                ))}
                <TableHead className="text-green-200 font-sans font-semibold text-sm bg-green-900/10">
                  Acciones
                </TableHead>
              </TableRow>

              {showFilters && (
                <TableRow className="border-b-2 border-green-400/30 bg-green-900/10 hover:bg-green-900/20">
                  {columns.map((column) => (
                    <TableHead
                      key={`filter-${column.key}`}
                      className="p-2 border-r-2 border-green-400/30 last:border-r-0"
                    >
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-green-400" />
                        <Input
                          placeholder={`Filtrar ${column.label.toLowerCase()}...`}
                          value={filters[column.key] || ""}
                          onChange={(e) => handleFilterChange(column.key, e.target.value)}
                          className="pl-7 h-8 bg-green-900/20 border-green-400/40 text-green-200 placeholder:text-green-400/60 text-xs"
                        />
                      </div>
                    </TableHead>
                  ))}
                  <TableHead className="p-2">
                    <div className="text-xs text-green-400/80 text-center">Filtros activos</div>
                  </TableHead>
                </TableRow>
              )}
            </TableHeader>

            <TableBody>
              {filteredData.map((row, index) => (
                <TableRow
                  key={row.id}
                  className={`border-b-2 border-green-400/20 transition-colors hover:bg-green-900/20 ${
                    index % 2 === 0 ? "bg-green-900/5" : "bg-transparent"
                  }`}
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.key}
                      className="text-green-100 font-mono text-sm py-3 border-r-2 border-green-400/20 last:border-r-0"
                    >
                      {editingId === row.id ? (
                        <Input
                          value={editData[column.key] || ""}
                          onChange={(e) => setEditData({ ...editData, [column.key]: e.target.value })}
                          className="bg-green-900/30 border-green-400/40 text-green-200 h-8 text-xs"
                          type={column.type === "number" ? "number" : "text"}
                        />
                      ) : (
                        <span
                          className={
                            column.type === "boolean" ? (row[column.key] ? "text-green-400" : "text-red-400") : ""
                          }
                        >
                          {formatValue(row[column.key], column.type)}
                        </span>
                      )}
                    </TableCell>
                  ))}
                  <TableCell className="py-3">
                    <div className="flex gap-1">
                      {editingId === row.id ? (
                        <>
                          <Button
                            size="sm"
                            onClick={handleSave}
                            className="bg-green-600 hover:bg-green-700 text-white h-8 px-2"
                          >
                            <Save className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={handleCancel}
                            className="border-green-400/40 text-green-300 hover:bg-green-900/20 h-8 px-2 bg-transparent"
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(row)}
                            className="border-green-400/50 text-green-300 hover:bg-green-900/20 h-8 px-2"
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(row.id)}
                            className="border-red-400/50 text-red-300 hover:bg-red-900/20 h-8 px-2"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}

              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={columns.length + 1} className="text-center text-green-400/60 py-12 border-r-0">
                    <div className="flex flex-col items-center gap-2">
                      <Search className="w-8 h-8 text-green-400/40" />
                      <p className="text-sm">
                        {data.length === 0
                          ? "No hay datos disponibles"
                          : "No se encontraron resultados con los filtros aplicados"}
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
