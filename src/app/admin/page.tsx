"use client";

import React, { useState, useEffect } from "react";
import {
  Lock,
  LogOut,
  Users,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  Search,
  Filter,
  Trash2,
  Edit,
  Save,
  RefreshCw,
  TrendingUp,
  Settings,
  Sparkles,
  Download,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { Enquiry, AppDatabase } from "@/lib/db";

export default function AdminDashboardPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"enquiries" | "settings">("enquiries");

  // Database state
  const [dbData, setDbData] = useState<AppDatabase | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  // Notes edit state
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState("");

  // Settings form state
  const [settingsForm, setSettingsForm] = useState({
    primaryPhone: "",
    secondaryPhone: "",
    email: "",
    whatsappNumber: "",
  });
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Check existing session
  useEffect(() => {
    const savedToken = sessionStorage.getItem("skd_admin_token");
    if (savedToken) {
      fetchDashboard(savedToken);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin", {
        headers: {
          Authorization: `Bearer ${passcode}`,
        },
      });

      const data = await res.json();

      if (res.ok && data.success) {
        sessionStorage.setItem("skd_admin_token", passcode);
        setDbData(data.data);
        setIsAuthenticated(true);
        if (data.data?.siteSettings?.contact) {
          setSettingsForm({
            primaryPhone: data.data.siteSettings.contact.primaryPhone,
            secondaryPhone: data.data.siteSettings.contact.secondaryPhone,
            email: data.data.siteSettings.contact.email,
            whatsappNumber: data.data.siteSettings.contact.whatsappNumber,
          });
        }
      } else {
        setErrorMsg("Invalid administrative passcode. Please enter the authorized master key.");
      }
    } catch (err) {
      setErrorMsg("Failed to connect to authentication server.");
    } finally {
      setLoading(false);
    }
  };

  const fetchDashboard = async (token: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setDbData(data.data);
        if (data.data?.siteSettings?.contact) {
          setSettingsForm({
            primaryPhone: data.data.siteSettings.contact.primaryPhone,
            secondaryPhone: data.data.siteSettings.contact.secondaryPhone,
            email: data.data.siteSettings.contact.email,
            whatsappNumber: data.data.siteSettings.contact.whatsappNumber,
          });
        }
      } else {
        sessionStorage.removeItem("skd_admin_token");
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("skd_admin_token");
    setIsAuthenticated(false);
    setPasscode("");
    setDbData(null);
  };

  const handleStatusChange = async (enquiryId: string, newStatus: Enquiry["status"]) => {
    const token = sessionStorage.getItem("skd_admin_token");
    if (!token) return;

    try {
      const res = await fetch("/api/admin", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "updateEnquiryStatus",
          enquiryId,
          status: newStatus,
        }),
      });

      if (res.ok) {
        fetchDashboard(token);
      }
    } catch (err) {
      console.error("Status update error", err);
    }
  };

  const handleSaveNotes = async (enquiryId: string) => {
    const token = sessionStorage.getItem("skd_admin_token");
    if (!token) return;

    try {
      const res = await fetch("/api/admin", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "updateEnquiryStatus",
          enquiryId,
          status: dbData?.enquiries.find((e) => e.id === enquiryId)?.status || "New",
          notes: tempNotes,
        }),
      });

      if (res.ok) {
        setEditingNotesId(null);
        fetchDashboard(token);
      }
    } catch (err) {
      console.error("Notes update error", err);
    }
  };

  const handleDeleteEnquiry = async (enquiryId: string) => {
    if (!confirm("Are you sure you want to delete this enquiry record?")) return;
    const token = sessionStorage.getItem("skd_admin_token");
    if (!token) return;

    try {
      const res = await fetch(`/api/admin?id=${enquiryId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        fetchDashboard(token);
      }
    } catch (err) {
      console.error("Delete error", err);
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = sessionStorage.getItem("skd_admin_token");
    if (!token) return;

    try {
      const res = await fetch("/api/admin", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "updateSiteSettings",
          siteSettings: {
            contact: {
              ...dbData?.siteSettings.contact,
              ...settingsForm,
            },
          },
        }),
      });

      if (res.ok) {
        setSettingsSaved(true);
        setTimeout(() => setSettingsSaved(false), 3000);
        fetchDashboard(token);
      }
    } catch (err) {
      console.error("Settings error", err);
    }
  };

  const exportToCsv = () => {
    if (!dbData?.enquiries.length) return;
    const headers = ["ID,Date,Name,Mobile,Email,City,Course,Mode,Status,Notes,Source"];
    const rows = dbData.enquiries.map((e) =>
      `"${e.id}","${new Date(e.createdAt).toLocaleDateString()}","${e.name}","${e.mobile}","${e.email}","${e.city}","${e.course}","${e.mode}","${e.status}","${(e.notes || "").replace(/"/g, '""')}","${e.source || ""}"`
    );
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `skd_enquiries_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // If not logged in, show secure login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 bg-[#F5F8FC]">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#E5EBF2] shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-[#10213B] text-[#D9A441] flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-bold text-[#10213B]">
              SKD Administrative Portal
            </h1>
            <p className="text-xs text-[#66758C]">
              Restricted portal for admission directors, counselors, and site editors.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#172B45] uppercase tracking-wider mb-1.5">
                Master Security Passcode
              </label>
              <input
                type="password"
                required
                placeholder="Enter admin passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E5EBF2] bg-[#F5F8FC]/50 text-sm focus:outline-none focus:border-[#2457D6] focus:bg-white"
              />
              <p className="text-[11px] text-gray-400 mt-1">
                Default Master Passcode: <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700">skdAdmin2026</code>
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#2457D6] hover:bg-[#1B45B3] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
            >
              <span>{loading ? "Verifying..." : "Authenticate & Access Portal"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Filtered inquiries
  const enquiries = dbData?.enquiries || [];
  const filteredEnquiries = enquiries.filter((e) => {
    const matchesSearch =
      e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.mobile.includes(searchTerm) ||
      e.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "All" || e.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalEnquiries = enquiries.length;
  const newEnquiries = enquiries.filter((e) => e.status === "New").length;
  const contactedEnquiries = enquiries.filter((e) => e.status === "Contacted" || e.status === "In-Progress").length;
  const enrolledCount = enquiries.filter((e) => e.status === "Enrolled").length;

  return (
    <div className="bg-[#F5F8FC] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="bg-white rounded-2xl border border-[#E5EBF2] p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                System Online & Synchronized
              </span>
            </div>
            <h1 className="text-2xl font-bold text-[#10213B] mt-1">
              SKD Institutional Admin Dashboard
            </h1>
            <p className="text-xs text-[#66758C]">
              Manage student admission leads, track follow-ups, and update live website settings.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => {
                const token = sessionStorage.getItem("skd_admin_token");
                if (token) fetchDashboard(token);
              }}
              className="p-2.5 bg-gray-100 hover:bg-gray-200 text-[#172B45] rounded-xl text-xs font-bold flex items-center transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className="w-4 h-4 mr-1.5" />
              <span>Refresh</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="p-2.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl text-xs font-bold flex items-center transition-colors"
            >
              <LogOut className="w-4 h-4 mr-1.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Top Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-5 rounded-2xl border border-[#E5EBF2] shadow-sm">
            <span className="text-xs font-bold text-[#66758C] uppercase tracking-wider block">
              Total Inquiries
            </span>
            <span className="text-3xl font-extrabold text-[#10213B] mt-1 block">
              {totalEnquiries}
            </span>
            <span className="text-[11px] text-blue-600 font-medium">All recorded leads</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E5EBF2] shadow-sm">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
              New Pending
            </span>
            <span className="text-3xl font-extrabold text-amber-600 mt-1 block">
              {newEnquiries}
            </span>
            <span className="text-[11px] text-gray-500">Requires follow-up</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E5EBF2] shadow-sm">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
              In Counselling
            </span>
            <span className="text-3xl font-extrabold text-blue-600 mt-1 block">
              {contactedEnquiries}
            </span>
            <span className="text-[11px] text-gray-500">Follow-up in progress</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E5EBF2] shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
              Enrolled Students
            </span>
            <span className="text-3xl font-extrabold text-emerald-600 mt-1 block">
              {enrolledCount}
            </span>
            <span className="text-[11px] text-emerald-600 font-medium">Converted admissions</span>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex border-b border-[#E5EBF2] space-x-4">
          <button
            type="button"
            onClick={() => setActiveTab("enquiries")}
            className={`pb-3 font-bold text-sm flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === "enquiries"
                ? "border-[#2457D6] text-[#2457D6]"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Admission Inquiries ({filteredEnquiries.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("settings")}
            className={`pb-3 font-bold text-sm flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === "settings"
                ? "border-[#2457D6] text-[#2457D6]"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Live Site Contact Settings</span>
          </button>
        </div>

        {/* TAB 1: ENQUIRIES */}
        {activeTab === "enquiries" && (
          <div className="space-y-6">
            {/* Filter and Search Bar */}
            <div className="bg-white p-4 rounded-2xl border border-[#E5EBF2] shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  placeholder="Search by name, phone, course..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E5EBF2] text-xs sm:text-sm focus:outline-none focus:border-[#2457D6]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 border border-[#E5EBF2] rounded-xl text-xs font-semibold text-[#172B45] focus:outline-none"
                  >
                    <option value="All">All Statuses</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="In-Progress">In-Progress</option>
                    <option value="Enrolled">Enrolled</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={exportToCsv}
                  className="px-3.5 py-2 bg-[#10213B] hover:bg-[#183155] text-white rounded-xl text-xs font-bold flex items-center transition-colors"
                >
                  <Download className="w-3.5 h-3.5 mr-1.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Inquiries Table */}
            <div className="bg-white rounded-2xl border border-[#E5EBF2] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F5F8FC] border-b border-[#E5EBF2] text-[#66758C] uppercase font-bold tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Date</th>
                      <th className="py-3.5 px-4">Candidate Details</th>
                      <th className="py-3.5 px-4">Course & Mode</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4">Counsellor Notes</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5EBF2] text-[#172B45]">
                    {filteredEnquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-gray-400">
                          No inquiries found matching your filters.
                        </td>
                      </tr>
                    ) : (
                      filteredEnquiries.map((enq) => (
                        <tr key={enq.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 px-4 whitespace-nowrap text-gray-500 font-medium">
                            {new Date(enq.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </td>

                          <td className="py-4 px-4">
                            <span className="font-bold text-[#10213B] block text-sm">
                              {enq.name}
                            </span>
                            <div className="text-gray-500 space-y-0.5 mt-0.5">
                              <a
                                href={`tel:${enq.mobile}`}
                                className="text-[#2457D6] hover:underline font-semibold block"
                              >
                                {enq.mobile}
                              </a>
                              <span className="block truncate max-w-[180px]">{enq.email}</span>
                              <span className="inline-block bg-gray-100 px-1.5 py-0.5 rounded text-[10px]">
                                {enq.city}
                              </span>
                            </div>
                          </td>

                          <td className="py-4 px-4">
                            <span className="font-semibold text-[#10213B] block">
                              {enq.course}
                            </span>
                            <span className="text-[11px] text-gray-500 block">
                              {enq.mode}
                            </span>
                            {enq.message && (
                              <p className="text-[11px] text-gray-600 italic mt-1 bg-gray-50 p-1.5 rounded max-w-xs">
                                &ldquo;{enq.message}&rdquo;
                              </p>
                            )}
                          </td>

                          <td className="py-4 px-4">
                            <select
                              value={enq.status}
                              onChange={(e) =>
                                handleStatusChange(enq.id, e.target.value as Enquiry["status"])
                              }
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold border focus:outline-none ${
                                enq.status === "New"
                                  ? "bg-amber-50 text-amber-800 border-amber-200"
                                  : enq.status === "Contacted"
                                  ? "bg-blue-50 text-blue-800 border-blue-200"
                                  : enq.status === "Enrolled"
                                  ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                                  : "bg-gray-100 text-gray-800 border-gray-200"
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="In-Progress">In-Progress</option>
                              <option value="Enrolled">Enrolled</option>
                              <option value="Closed">Closed</option>
                            </select>
                          </td>

                          <td className="py-4 px-4 max-w-xs">
                            {editingNotesId === enq.id ? (
                              <div className="space-y-1">
                                <textarea
                                  rows={2}
                                  value={tempNotes}
                                  onChange={(e) => setTempNotes(e.target.value)}
                                  className="w-full p-2 border rounded text-xs"
                                />
                                <div className="flex space-x-1">
                                  <button
                                    type="button"
                                    onClick={() => handleSaveNotes(enq.id)}
                                    className="px-2 py-1 bg-emerald-600 text-white rounded text-[10px] font-bold"
                                  >
                                    Save
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setEditingNotesId(null)}
                                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-[10px]"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div
                                onClick={() => {
                                  setEditingNotesId(enq.id);
                                  setTempNotes(enq.notes || "");
                                }}
                                className="cursor-pointer group flex items-start justify-between p-1.5 rounded hover:bg-gray-100/60"
                                title="Click to edit notes"
                              >
                                <span className="text-gray-600 line-clamp-2">
                                  {enq.notes || <em className="text-gray-400">Click to add notes...</em>}
                                </span>
                                <Edit className="w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100 shrink-0 ml-1" />
                              </div>
                            )}
                          </td>

                          <td className="py-4 px-4 text-right">
                            <button
                              type="button"
                              onClick={() => handleDeleteEnquiry(enq.id)}
                              className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete enquiry"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SITE SETTINGS */}
        {activeTab === "settings" && (
          <div className="bg-white p-8 rounded-3xl border border-[#E5EBF2] shadow-sm max-w-2xl space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#10213B]">
                Live Site Contact & WhatsApp Settings
              </h2>
              <p className="text-xs text-[#66758C] mt-1">
                Updates here immediately take effect across the entire website navigation, footer, and call triggers without redeploying code.
              </p>
            </div>

            {settingsSaved && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Settings saved successfully to persistent database!</span>
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#172B45] uppercase tracking-wider mb-1">
                  Primary Contact Phone
                </label>
                <input
                  type="text"
                  value={settingsForm.primaryPhone}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, primaryPhone: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5EBF2] text-sm focus:outline-none focus:border-[#2457D6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#172B45] uppercase tracking-wider mb-1">
                  Secondary Contact Phone
                </label>
                <input
                  type="text"
                  value={settingsForm.secondaryPhone}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, secondaryPhone: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5EBF2] text-sm focus:outline-none focus:border-[#2457D6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#172B45] uppercase tracking-wider mb-1">
                  Official Email Address
                </label>
                <input
                  type="email"
                  value={settingsForm.email}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5EBF2] text-sm focus:outline-none focus:border-[#2457D6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#172B45] uppercase tracking-wider mb-1">
                  WhatsApp Number (with 91 country code, no + or spaces)
                </label>
                <input
                  type="text"
                  value={settingsForm.whatsappNumber}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5EBF2] text-sm focus:outline-none focus:border-[#2457D6]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#2457D6] hover:bg-[#1B45B3] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Live Settings</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
